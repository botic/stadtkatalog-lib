import {exportEntries} from "../src";

test("exports all entries", async () => {
    const entriesA = await exportEntries(false, 1000, "seestadt");
    const entriesB = await exportEntries(false, 100, "seestadt");
    expect(entriesA.length).toBeGreaterThan(150);
    expect(entriesA.length).toBe(entriesB.length);
}, 1000 * 60);

test("exports all entries with a geofence", async () => {
    const entriesSeestadt = await exportEntries(false, 1000, "seestadt");
    expect(entriesSeestadt.length).toBeGreaterThan(100);
    expect(entriesSeestadt.some(entry => entry._id === "100105")).toBe(true);
    expect(entriesSeestadt.some(entry => entry._id === "100616")).toBe(false);

    const entriesStuwer = await exportEntries(false, 1000, "stuwerviertel");
    expect(entriesStuwer.length).toBeGreaterThan(1);
    expect(entriesStuwer.some(entry => entry._id === "100105")).toBe(false);
    expect(entriesStuwer.some(entry => entry._id === "100616")).toBe(true);
}, 1000 * 60);
