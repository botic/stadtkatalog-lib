
# Module: "index"

## Index

### Functions

* [exportEntries](_index_.md#exportentries)
* [getEntry](_index_.md#getentry)
* [getEntryData](_index_.md#getentrydata)
* [getEntryEnclosures](_index_.md#getentryenclosures)
* [searchAround](_index_.md#searcharound)
* [searchFulltext](_index_.md#searchfulltext)

## Functions

###  exportEntries

▸ **exportEntries**(`includeAssets`: boolean, `size`: number, `geoFence?`: null | string | [GeoFencePoint](../interfaces/_types_.geofencepoint.md)[], `validAfter?`: Date): *Promise‹[ExportEntry](../interfaces/_types_.exportentry.md)[]›*

Exports the full StadtKatalog entries.

**`see`** https://docs.stadtkatalog.org/opendata-rest-api/#export-api

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`includeAssets` | boolean | false |
`size` | number | 100 |
`geoFence?` | null &#124; string &#124; [GeoFencePoint](../interfaces/_types_.geofencepoint.md)[] | - |
`validAfter?` | Date | - |

**Returns:** *Promise‹[ExportEntry](../interfaces/_types_.exportentry.md)[]›*

___

###  getEntry

▸ **getEntry**(`id`: string, `validAfter?`: Date): *Promise‹[Entry](../interfaces/_types_.entry.md) | null›*

Retrieves a single entry by its ID.

**`see`** https://docs.stadtkatalog.org/opendata-rest-api/#entry-by-id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | the entry's id |
`validAfter?` | Date | optional; if set, only return the entry if it is valid after the given point in time |

**Returns:** *Promise‹[Entry](../interfaces/_types_.entry.md) | null›*

___

###  getEntryData

▸ **getEntryData**(`id`: string, `validAfter?`: Date): *Promise‹[EntryData](../interfaces/_types_.entrydata.md) | null›*

Retrieves a entry's data by its ID. No metadata will be included.

**`see`** https://docs.stadtkatalog.org/opendata-rest-api/#entry-by-id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | the entry's id |
`validAfter?` | Date | optional; if set, only return the entry if it is valid after the given point in time |

**Returns:** *Promise‹[EntryData](../interfaces/_types_.entrydata.md) | null›*

___

###  getEntryEnclosures

▸ **getEntryEnclosures**(`id`: string, `size`: number): *Promise‹[Entry](../interfaces/_types_.entry.md)[] | null›*

Gets all enclosed entries for the given entry.

**`see`** https://docs.stadtkatalog.org/opendata-rest-api/#entry-enclosures

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`id` | string | - | the parent entry's id |
`size` | number | 100 | size of the result pages for pagination |

**Returns:** *Promise‹[Entry](../interfaces/_types_.entry.md)[] | null›*

___

###  searchAround

▸ **searchAround**(`longitude`: number, `latitude`: number, `distance`: number, `unit`: [DistanceUnit](../enums/_types_.distanceunit.md), `query?`: string | null, `sortField`: [SortField](../enums/_types_.sortfield.md), `sortOrder`: [SortOrder](../enums/_types_.sortorder.md), `size`: number, `from`: number, `geoFence?`: null | string | [GeoFencePoint](../interfaces/_types_.geofencepoint.md)[], `validAfter?`: Date): *Promise‹[SearchResults](../interfaces/_types_.searchresults.md) | null›*

Only searches around a given spot. Performs a full text queries over the following fields:
name (most weighted), keywords, description.

**`see`** https://docs.stadtkatalog.org/opendata-rest-api/#location-based-query

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`longitude` | number | - | center of the search circle |
`latitude` | number | - | center of the search circle |
`distance` | number | - | the radius of the search circle |
`unit` | [DistanceUnit](../enums/_types_.distanceunit.md) | - | the unit of the given radius distance |
`query?` | string &#124; null | - | query string |
`sortField` | [SortField](../enums/_types_.sortfield.md) | SortField.relevance | sorts the results by the given field. Note: fulltext queries cannot be sorted by `distance`. |
`sortOrder` | [SortOrder](../enums/_types_.sortorder.md) | SortOrder.desc | order of the results |
`size` | number | 100 | order of the results, upper limit is 1,000 |
`from` | number | 0 | the number of initial results that should be skipped |
`geoFence?` | null &#124; string &#124; [GeoFencePoint](../interfaces/_types_.geofencepoint.md)[] | - | optional; a named geo-fence string, an array of points, or null if no geofence should be used. |
`validAfter?` | Date | - | optional; if set, only return the entry if it is valid after the given point in time |

**Returns:** *Promise‹[SearchResults](../interfaces/_types_.searchresults.md) | null›*

___

###  searchFulltext

▸ **searchFulltext**(`query`: string, `sortField`: [SortField](../enums/_types_.sortfield.md), `sortOrder`: [SortOrder](../enums/_types_.sortorder.md), `size`: number, `from`: number, `geoFence?`: null | string | [GeoFencePoint](../interfaces/_types_.geofencepoint.md)[], `validAfter?`: Date): *Promise‹[SearchResults](../interfaces/_types_.searchresults.md) | null›*

Performs a full text queries over the following fields: name (most weighted), keywords, description.

**`see`** https://docs.stadtkatalog.org/opendata-rest-api/#search-api

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`query` | string | - | query string |
`sortField` | [SortField](../enums/_types_.sortfield.md) | SortField.relevance | sorts the results by the given field. Note: fulltext queries cannot be sorted by `distance`. |
`sortOrder` | [SortOrder](../enums/_types_.sortorder.md) | SortOrder.desc | order of the results |
`size` | number | 100 | order of the results, upper limit is 1,000 |
`from` | number | 0 | the number of initial results that should be skipped |
`geoFence?` | null &#124; string &#124; [GeoFencePoint](../interfaces/_types_.geofencepoint.md)[] | - | optional; a named geo-fence string, an array of points, or null if no geofence should be used. |
`validAfter?` | Date | - | optional; if set, only return the entry if it is valid after the given point in time |

**Returns:** *Promise‹[SearchResults](../interfaces/_types_.searchresults.md) | null›*
