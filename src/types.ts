/**
 * A schema to store local businesses and other yellow-pages like entries.
 */
export interface EntryData {
    /**
     * The address line typically including a street name and a house number or similar.
     */
    address: string;
    /**
     * The city name part of the address.
     */
    city: string;
    /**
     * The ISO 3166-1 alpha-2 code of the entry.
     */
    countryCode: string;
    /**
     * A description of the entry.
     */
    description: string;
    /**
     * A general e-mail contact.
     */
    email: string;
    /**
     * If true, the provided e-mail should not be visible in exports.
     */
    emailHidden: boolean;
    /**
     * Facebook Page ID or name.
     */
    facebook: string;
    /**
     * The venue id of the location on Foursquare / Swarm.
     */
    foursquare:  string;
    hours:       Hours;
    hoursRemark: string;
    /**
     * The unique ID of an existing entry where this one is contained in.
     */
    insideOf: null | string;
    /**
     * Instagram account name.
     */
    instagram: string;
    /**
     * An array of keywords, synonym names and alternative spellings.
     */
    keywords: string[];
    /**
     * A short label of the entry to be used as button text or other UI-like elements.
     */
    label:                 string;
    latitude:              number | null;
    longitude:             number | null;
    licensingInformation?: string;
    /**
     * The name of the entry.
     */
    name: string;
    /**
     * Phone number of the entry.
     */
    phone: string;
    /**
     * The postal code of the address.
     */
    postalCode: string;
    promotions: Promotion[];
    tags:       string[];
    /**
     * Twitter handle without the leading @.
     */
    twitter: string;
    uid:     string;
    /**
     * A ISO 8601 compliant date or date time string in UTC. Format must be:
     * YYYY-MM-DDTHH:mm:ss.sssZ
     */
    validUntil: null | string;
    /**
     * The full URL to the website.
     */
    website: string;
    zvr:     string;
}

export interface Hours {
}

export interface Promotion {
    /**
     * A ISO 8601 compliant date or date time string in UTC. Format must be:
     * YYYY-MM-DDTHH:mm:ss.sssZ
     */
    end: string;
    /**
     * An additional URL which has more details for the promotion.
     */
    href: string;
    /**
     * A ISO 8601 compliant date or date time string in UTC. Format must be:
     * YYYY-MM-DDTHH:mm:ss.sssZ
     */
    start: string;
    text:  string;
    title: string;
}

export interface Asset {
    mimeType: string;
    category: string;
    spdxLicense: string;
    licenseInformation: string;
    master: string;
    versions: {
        [propName: string]: string;
    };
}

export interface Entry {
    id: string;
    assets: Asset[];
    hasEnclosures: boolean;
    created: string;
    modified: string;
    data: EntryData;
}

export interface GeoFencePoint {
    latitude: number;
    longitude: number;
}

export enum SortField {
    id = "id",
    created = "created",
    modified = "modified",
    name = "name",
    relevance = "relevance",
    distance = "distance",
}

export enum SortOrder {
    asc = "asc",
    desc = "desc",
}

export interface SearchResult {
    created: string;
    modified: string;
    id: string;
    data: EntryData;
    score: number;
    relativeScore: number;
}

export interface SearchResults {
    totalHits: number;
    maxScore: number;
    hits: SearchResult[];
}
