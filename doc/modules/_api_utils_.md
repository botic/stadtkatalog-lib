
# Module: "api-utils"

## Index

### Variables

* [client](_api_utils_.md#const-client)

### Functions

* [getLinks](_api_utils_.md#getlinks)
* [getPaginatedResults](_api_utils_.md#getpaginatedresults)

## Variables

### `Const` client

• **client**: *AxiosInstance* = axios.create({
    baseURL: process.env.STADTKATALOG_ENDPOINT || "https://app.stadtkatalog.org/opendata/v1",
    timeout: Number(process.env.STADTKATALOG_TIMEOUT) || 15000,
    responseType: "json",
    headers: {
        "Accept": "application/json",
        "User-Agent": "StadtKatalog Client",
    }
})

## Functions

###  getLinks

▸ **getLinks**(`response`: AxiosResponse): *Links | null*

Parses the HTTP Link header to detect a paginated response.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`response` | AxiosResponse |   |

**Returns:** *Links | null*

___

###  getPaginatedResults

▸ **getPaginatedResults**<**T**>(`url`: string, `paginationParams`: [PaginationParams](../interfaces/_types_.paginationparams.md), `additionalParams`: object): *AsyncIterable‹T›*

Returns an AsyncIterator to retrieve paginated results. Library functions like `exportEntries()`
are using this to generate a result set.

**`params`** additionalParams additional query parameters to send

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`url` | string | - | the URL to load |
`paginationParams` | [PaginationParams](../interfaces/_types_.paginationparams.md) | - | the pagination parameters like size or geofence settings |
`additionalParams` | object | {} | - |

**Returns:** *AsyncIterable‹T›*
