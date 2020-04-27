import {getPaginatedResults} from "../src/api-utils";
import {Entry} from "../src/types";

test("Get all paginated result", async () => {
    const resultA = await getPaginatedResults<Entry>(
        "/entry/100105/enclosures",
        1
    );
    const resultB = await getPaginatedResults<Entry>(
        "https://app.stadtkatalog.org/opendata/v1/entry/100105/enclosures",
        1000
    );
    expect(resultA).not.toBeNull();
    expect(resultB).not.toBeNull();
    expect(resultA?.length).toBeGreaterThan(1);
    expect(resultA?.length).toBe(resultB?.length);
});
