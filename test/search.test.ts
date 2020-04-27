import {searchFulltext} from "../src";
import {GeoFencePoint, SortField, SortOrder} from "../src/types";

test("Run simple fulltext search fuzzy", async () => {
    const results = await searchFulltext("Seestern Aspern");
    expect(results).not.toBeNull();
    expect(results?.hits.some(hit => hit.id === "100105")).toBe(true);
    expect(results?.hits.some(hit => hit.id === "100108")).toBe(true);
    expect(results?.hits.some(hit => hit.id === "100109")).toBe(true);
});

test("Run simple fulltext search stricter", async () => {
    const results = await searchFulltext("Seestern");
    expect(results).not.toBeNull();
    expect(results?.hits.some(hit => hit.id === "100105")).toBe(true);
    expect(results?.hits.some(hit => hit.id === "100108")).toBe(true);
    expect(results?.hits.some(hit => hit.id === "100109")).toBe(false);
});

test("Run simple fulltext search with geofence name", async () => {
    const resultsStuwer = await searchFulltext("Seestern", SortField.relevance, SortOrder.desc, 100, 0, "stuwerviertel");
    expect(resultsStuwer).not.toBeNull();
    expect(resultsStuwer?.hits.some(hit => hit.id === "100105")).toBe(false);

    const resultsSeestadt = await searchFulltext("Seestern", SortField.relevance, SortOrder.desc, 100, 0, "seestadt");
    expect(resultsSeestadt).not.toBeNull();
    expect(resultsSeestadt?.hits.some(hit => hit.id === "100105")).toBe(true);
});

test("Run simple fulltext search with geofence points", async () => {
    const outerFence = [
        { latitude: 48.224684, longitude: 16.372499 },
        { latitude: 48.302883, longitude: 15.386596},
        { latitude: 48.037876, longitude: 16.131733},
        { latitude: 48.224684, longitude: 16.372499 },
    ] as GeoFencePoint[];
    const outResults = await searchFulltext("Seestern", SortField.relevance, SortOrder.desc, 100, 0, outerFence);
    expect(outResults).not.toBeNull();
    expect(outResults?.hits.some(hit => hit.id === "100105")).toBe(false);

    const innerFence = [
        { latitude: 48.224230, longitude: 16.498865 },
        { latitude: 48.223222, longitude: 16.498650},
        { latitude: 48.223108, longitude: 16.500142},
        { latitude: 48.224023, longitude: 16.500486},
        { latitude: 48.224230, longitude: 16.498865 },
    ] as GeoFencePoint[];
    const resultsSeestadt = await searchFulltext("Seestern", SortField.relevance, SortOrder.desc, 100, 0, innerFence);
    expect(resultsSeestadt).not.toBeNull();
    expect(resultsSeestadt?.hits.some(hit => hit.id === "100105")).toBe(true);
});

test("Run simple fulltext search with validAfter", async () => {
    const resultA = await searchFulltext("Seestern", SortField.relevance, SortOrder.desc, 100, 0, "seestadt");
    expect(resultA).not.toBeNull();
    expect(resultA?.hits.some(hit => hit.id === "100105")).toBe(true);

    const resultB = await searchFulltext("Seestern", SortField.relevance, SortOrder.desc, 100, 0, "seestadt", new Date(0));
    expect(resultB).not.toBeNull();
    expect(resultB?.hits.some(hit => hit.id === "100105")).toBe(true);
    expect(resultA?.totalHits).toBe(resultB?.totalHits);
});
