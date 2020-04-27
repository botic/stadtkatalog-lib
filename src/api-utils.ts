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

export async function getPaginatedResults<T>(url: string, size=100): Promise<T[]|null> {
    const results = [] as T[][];

    try {
        let hasNextLink = false,
            currentUrl = url;

        do {
            const response = await client.get<T[]>(currentUrl, (!hasNextLink ? { params: { size } } : {}));
            results.push(response.data);

            const links = getLinks(response);
            if (links?.next) {
                if (!links.next.size || !links.next.url) {
                    // this should never happen with the real API …
                    console.error(`Invalid StadtKatalog API response for paginated result: ${url}`);
                    return [];
                }

                currentUrl = links.next.url;
                hasNextLink = true;
            } else {
                hasNextLink = false;
            }
        } while (hasNextLink);

        return results.flat();
    } catch (e) {
        return null;
    }
}
