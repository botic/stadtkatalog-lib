import axios, {AxiosResponse} from "axios";
import * as parseLinkHeader from "parse-link-header";
import {Links} from "parse-link-header";
import {PaginationParams} from "./types";

export const client = axios.create({
    baseURL: process.env.STADTKATALOG_ENDPOINT || "https://app.stadtkatalog.org/opendata/v1",
    timeout: Number(process.env.STADTKATALOG_TIMEOUT) || 15000,
    responseType: "json",
    headers: {
        "Accept": "application/json",
        "User-Agent": "StadtKatalog Client",
    }
});

/**
 * Parses the HTTP Link header to detect a paginated response.
 * @param response
 */
export function getLinks(response: AxiosResponse): Links|null {
    return parseLinkHeader(response.headers["link"] || "");
}

/**
 * Returns an AsyncIterator to retrieve paginated results. Library functions like `exportEntries()`
 * are using this to generate a result set.
 * @param url the URL to load
 * @param paginationParams the pagination parameters like size or geofence settings
 * @params additionalParams additional query parameters to send
 */
export async function* getPaginatedResults<T>(url: string, paginationParams: PaginationParams, additionalParams={}): AsyncIterable<T> {
        let hasNextLink = false,
            currentUrl = url;

        const params = Object.assign({}, {
            ...paginationParams.sortField && { sortField: paginationParams.sortField },
            ...paginationParams.sortOrder && { sortOrder: paginationParams.sortOrder },
            ...(paginationParams.size && paginationParams.size >= 0) && { size: paginationParams.size },
            ...(paginationParams.from && paginationParams.from >= 0) && { from: paginationParams.from },
            ...(paginationParams.geoFence !== null && typeof paginationParams.geoFence === "string") && { geoFenceName: paginationParams.geoFence },
            ...(paginationParams.geoFence !== null && typeof paginationParams.geoFence === "object") && { geoFence: paginationParams.geoFence.map(p => `${p.longitude},${p.latitude}`).join(",") },
            ...paginationParams.validAfter instanceof Date && { validAfter: paginationParams.validAfter.toISOString() },
        }, additionalParams);

        do {
            let response;
            try {
                response = await client.get<T[]>(currentUrl, (!hasNextLink ? { params } : {}));
            } catch (e) {
                throw Error(`Could not read paginated result. ${e}`);
            }

            const { data } = response;
            if (!Array.isArray(data)) {
                throw Error("Invalid StadtKatalog API response. Must return an array!");
            }

            for (const item of data) {
                yield item;
            }

            const links = getLinks(response);
            if (links?.next) {
                if (!links.next.size || !links.next.url) {
                    // this should never happen with the real API …
                    throw Error(`Invalid StadtKatalog API response for paginated result: ${url}`);
                }

                currentUrl = links.next.url;
                hasNextLink = true;
            } else {
                hasNextLink = false;
            }
        } while (hasNextLink);
}
