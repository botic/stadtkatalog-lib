import axios, {AxiosResponse} from "axios";
import * as parseLinkHeader from "parse-link-header";
import {Links} from "parse-link-header";

export const client = axios.create({
    baseURL: process.env.STADTKATALOG_ENDPOINT || "https://app.stadtkatalog.org/opendata/v1",
    timeout: Number(process.env.STADTKATALOG_TIMEOUT) || 15000,
    responseType: "json",
    headers: {
        "Accept": "application/json",
        "User-Agent": "StadtKatalog Client",
    }
});

export function getLinks(response: AxiosResponse): Links|null {
    return parseLinkHeader(response.headers["link"] || "");
}

export async function* getPaginatedResults<T>(url: string, size=100): AsyncIterable<T> {
        let hasNextLink = false,
            currentUrl = url;

        do {
            let response;
            try {
                response = await client.get<T[]>(currentUrl, (!hasNextLink ? { params: { size } } : {}));
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
