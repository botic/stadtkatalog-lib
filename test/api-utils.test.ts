import {getPaginatedResults} from "../src/api-utils";
import {Entry} from "../src/types";

test("Get all paginated result", async () => {
    const resultA = [] as Entry[];
    for await (const entry of getPaginatedResults<Entry>(`/entry/100105/enclosures`, { size: 1 })) {
        resultA.push(entry);
    }

    const resultB = [] as Entry[];
    for await (const entry of getPaginatedResults<Entry>(`/entry/100105/enclosures`, { size: 100 })) {
        resultB.push(entry);
    }

    expect(resultA).not.toBeNull();
    expect(resultB).not.toBeNull();
    expect(resultA?.length).toBeGreaterThan(1);
    expect(resultA?.length).toBe(resultB?.length);
});
