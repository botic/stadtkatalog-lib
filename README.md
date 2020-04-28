# @stadtkatalog/stadtkatalog

A client library for the 📖StadtKatalog.

## Installation

```
$ npm install @stadtkatalog/stadtkatalog
```

## Functions

The following functions provide access to the StadtKatalog Open Data REST API:

* [getEntry](https://github.com/botic/stadtkatalog-lib/blob/master/doc/modules/_index_.md#getentry)
* [getEntryData](https://github.com/botic/stadtkatalog-lib/blob/master/doc/modules/_index_.md#getentrydata)
* [getEntryEnclosures](https://github.com/botic/stadtkatalog-lib/blob/master/doc/modules/_index_.md#getentryenclosures)
* [exportEntries](https://github.com/botic/stadtkatalog-lib/blob/master/doc/modules/_index_.md#exportentries)
* [searchFulltext](https://github.com/botic/stadtkatalog-lib/blob/master/doc/modules/_index_.md#searchfulltext)
* [searchAround](https://github.com/botic/stadtkatalog-lib/blob/master/doc/modules/_index_.md#searcharound)

Some functions use the REST API's [Standard Query Parameters](https://docs.stadtkatalog.org/opendata-rest-api/#standard-query-parameters)
to paginate or scroll through query results.

This library is written in TypeScript and [provides enumerations and interfaces](https://github.com/botic/stadtkatalog-lib/blob/master/doc/modules/_types_.md)
to work with API responses.

## Examples

```typescript
// Retrieve a single entry with its metadata
const seesternEntry = await getEntry("100105");

// Retrieve only the entry's data
const seesternData = await getEntryData("100105");

// Export all entries inside the Seestadt geofence,
// including entry assets and with export page size 500
const seestadtAspern = await exportEntries(true, 500, "seestadt");

// Fulltext search over the whole StadtKatalog
const results = await searchFulltext("Seestern");

// Fulltext search with the Seestadt geofence
const resultsSeestadt = await searchFulltext(
    "Seestern",
    SortField.relevance, // TypeScript enum
    SortOrder.desc, // TypeScript enum
    100,
    0,
    "seestadt"
);
```

## Configuration

The base URL and the HTTP client timeout can be changed with the following environment
variable (`process.env` in Node):

* `STADTKATALOG_ENDPOINT` – defaults to `https://app.stadtkatalog.org/opendata/v1`
* `STADTKATALOG_CLIENT_TIMEOUT` – defaults to `60000` ms

Use a webpack plugin variable to switch to a different base URL in client-side projects:

```javascript
plugins: [
  new webpack.DefinePlugin({
    'process.env': {
      'STADTKATALOG_ENDPOINT': '"https://example.com/opendata/v1"',
      'STADTKATALOG_CLIENT_TIMEOUT': '10000'
    }
  })
]
```

## License

ISC – StadtKatalog.org / Philipp Naderer-Puiu
