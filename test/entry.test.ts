import {getEntry, getEntryData} from "../src";

test("Get single entry", async () => {
    const seestern = await getEntry("100105");
    expect(seestern).not.toBeNull();
    expect(seestern?.created).toBe("2018-02-26T11:51:37.644Z");
    expect(seestern?.data?.countryCode).toBe("AT");
});

test("Get single entry data", async () => {
    const seestern = await getEntryData("100105");
    expect(seestern).not.toBeNull();
    expect(seestern?.countryCode).toBe("AT");
});

test("Get non-existing entry", async () => {
    const missing = await getEntry("1");
    expect(missing).toBeNull();
});

test("Get non-existing entry data", async () => {
    const missing = await getEntryData("1");
    expect(missing).toBeNull();
});
