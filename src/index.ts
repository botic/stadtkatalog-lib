import {EntryData, Entry, SortField, SortOrder, GeoFencePoint, SearchResults} from "./types";
import {client, getPaginatedResults} from "./api-utils";

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

/**
 * Gets all enclosed entries for the given entry.
 * @param id the parent entry's id
 * @see https://docs.stadtkatalog.org/opendata-rest-api/#entry-enclosures
 */
export async function getEntryEnclosures(id: string): Promise<Entry[]|null> {
    try {
        return await getPaginatedResults<Entry>(`/entry/${id}/enclosures`);
    } catch (e) {
        return null;
    }
}

/**
 * Performs a full text queries over the following fields: name (most weighted), keywords, description.
 * @param query query string
 * @param sortField sorts the results by the given field. Note: fulltext queries cannot be sorted by `distance`.
 * @param sortOrder order of the results
 * @param size order of the results, upper limit is 1,000
 * @param from the number of initial results that should be skipped
 * @param geoFence optional; a named geo-fence string, an array of points, or null if no geofence should be used.
 * @param validAfter optional; if set, only return the entry if it is valid after the given point in time
 */
export async function searchFulltext(
    query: string,
    sortField=SortField.relevance,
    sortOrder=SortOrder.desc,
    size=100,
    from=0,
    geoFence?: null|string|GeoFencePoint[],
    validAfter?: Date
): Promise<SearchResults|null> {
    try {
        const params = {
            q: query,
            sortField,
            sortOrder,
            size,
            from,
            ...(geoFence !== null && typeof geoFence === "string") && { geoFenceName: geoFence },
            ...(geoFence !== null && typeof geoFence === "object") && { geoFence: geoFence.map(p => `${p.longitude},${p.latitude}`).join(",") },
            ...validAfter instanceof Date && { validAfter: validAfter.toISOString() },
        };

        const response = await client.get<SearchResults>(`/search/fulltext`, { params });
        return response.data;
    } catch (e) {
        return null;
    }
}
