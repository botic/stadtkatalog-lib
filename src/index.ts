/**
 * `stadtkatalog-lib` is the standard JavaScript library to access the StadtKatalog Open Data REST API.
 */

import {
    EntryData,
    Entry,
    SortField,
    SortOrder,
    GeoFencePoint,
    SearchResults,
    DistanceUnit,
    ExportEntry
} from "./types";
import {
    client,
    getPaginatedResults
} from "./api-utils";

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
 * @param size size of the result pages for pagination
 * @see https://docs.stadtkatalog.org/opendata-rest-api/#entry-enclosures
 */
export async function getEntryEnclosures(id: string, size=100): Promise<Entry[]|null> {
    try {
        const entries = [] as Entry[];
        for await (const entry of getPaginatedResults<Entry>(`/entry/${id}/enclosures`, { size })) {
            entries.push(entry);
        }
        return entries;
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
 * @see https://docs.stadtkatalog.org/opendata-rest-api/#search-api
 */
export async function searchFulltext(
    query: string,
    sortField=SortField.relevance,
    sortOrder=SortOrder.desc,
    size=100,
    from=0,
    geoFence?: null|string|GeoFencePoint[],
    validAfter?: Date,
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

/**
 * Only searches around a given spot. Performs a full text queries over the following fields:
 * name (most weighted), keywords, description.
 * @param longitude center of the search circle
 * @param latitude center of the search circle
 * @param distance the radius of the search circle
 * @param unit the unit of the given radius distance
 * @param query query string
 * @param sortField sorts the results by the given field. Note: fulltext queries cannot be sorted by `distance`.
 * @param sortOrder order of the results
 * @param size order of the results, upper limit is 1,000
 * @param from the number of initial results that should be skipped
 * @param geoFence optional; a named geo-fence string, an array of points, or null if no geofence should be used.
 * @param validAfter optional; if set, only return the entry if it is valid after the given point in time
 * @see https://docs.stadtkatalog.org/opendata-rest-api/#location-based-query
 */
export async function searchAround(
    longitude: number,
    latitude: number,
    distance: number,
    unit: DistanceUnit,
    query?: string|null,
    sortField=SortField.relevance,
    sortOrder=SortOrder.desc,
    size=100,
    from=0,
    geoFence?: null|string|GeoFencePoint[],
    validAfter?: Date,
): Promise<SearchResults|null> {
    try {
        const params = {
            lnglat: `${longitude},${latitude}`,
            distance,
            unit,
            sortField,
            sortOrder,
            size,
            from,
            ...typeof query === "string" && { q: query },
            ...(geoFence !== null && typeof geoFence === "string") && { geoFenceName: geoFence },
            ...(geoFence !== null && typeof geoFence === "object") && { geoFence: geoFence.map(p => `${p.longitude},${p.latitude}`).join(",") },
            ...validAfter instanceof Date && { validAfter: validAfter.toISOString() },
        };

        const response = await client.get<SearchResults>(`/search/around`, { params });
        return response.data;
    } catch (e) {
        return null;
    }
}

/**
 * Exports the full StadtKatalog entries.
 * @param includeAssets
 * @param size
 * @param geoFence
 * @param validAfter
 * @see https://docs.stadtkatalog.org/opendata-rest-api/#export-api
 */
export async function exportEntries(
    includeAssets=false,
    size=100,
    geoFence?: null|string|GeoFencePoint[],
    validAfter?: Date,
): Promise<ExportEntry[]> {
    const paginationParams = {
        size,
        geoFence,
        validAfter,
    };
    const entryBuffer = [] as ExportEntry[];
    for await (const entry of getPaginatedResults<ExportEntry>(`/export/json`, paginationParams, { includeAssets })) {
        entryBuffer.push(entry);
    }

    return entryBuffer;
}
