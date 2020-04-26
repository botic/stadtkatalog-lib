import axios from "axios";
import {EntryData, Entry} from "./types";

const client = axios.create({
    baseURL: process.env.STADTKATALOG_ENDPOINT || "https://app.stadtkatalog.org/opendata/v1",
    timeout: Number(process.env.STADTKATALOG_TIMEOUT) || 15000,
    responseType: "json",
    headers: {
        "Accept": "application/json",
        "User-Agent": "StadtKatalog Client",
    }
});

/**
 * Retrieves a entry's data by its ID. No metadata will be included.
 * @param id the entry's id
 * @param validAfter optional; if set, only return the entry if it is valid after the given point in time
 * @see https://docs.stadtkatalog.org/opendata-rest-api/#entry-by-id
 */
export async function getEntryData(id: string, validAfter?: Date): Promise<EntryData|null> {
    try {
        const params = validAfter instanceof Date
            ? { validAfter: validAfter.toISOString() }
            : {};

        const response = await client.get<Entry>(`/entry/${id}`, { params });
        return response.data.data;
    } catch (e) {
        return null;
    }
}

/**
 * Retrieves a single entry by its ID.
 * @param id the entry's id
 * @param validAfter optional; if set, only return the entry if it is valid after the given point in time
 * @see https://docs.stadtkatalog.org/opendata-rest-api/#entry-by-id
 */
export async function getEntry(id: string, validAfter?: Date): Promise<Entry|null> {
    try {
        const params = validAfter instanceof Date
            ? { validAfter: validAfter.toISOString() }
            : {};

        const response = await client.get<Entry>(`/entry/${id}`, { params });
        return response.data;
    } catch (e) {
        return null;
    }
}
