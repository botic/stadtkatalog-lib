
# Interface: EntryData

A schema to store local businesses and other yellow-pages like entries.

## Hierarchy

* **EntryData**

  ↳ [ExportEntry](_types_.exportentry.md)

## Index

### Properties

* [address](_types_.entrydata.md#address)
* [city](_types_.entrydata.md#city)
* [countryCode](_types_.entrydata.md#countrycode)
* [description](_types_.entrydata.md#description)
* [email](_types_.entrydata.md#email)
* [emailHidden](_types_.entrydata.md#emailhidden)
* [facebook](_types_.entrydata.md#facebook)
* [foursquare](_types_.entrydata.md#foursquare)
* [hours](_types_.entrydata.md#hours)
* [hoursRemark](_types_.entrydata.md#hoursremark)
* [insideOf](_types_.entrydata.md#insideof)
* [instagram](_types_.entrydata.md#instagram)
* [keywords](_types_.entrydata.md#keywords)
* [label](_types_.entrydata.md#label)
* [latitude](_types_.entrydata.md#latitude)
* [licensingInformation](_types_.entrydata.md#optional-licensinginformation)
* [longitude](_types_.entrydata.md#longitude)
* [name](_types_.entrydata.md#name)
* [phone](_types_.entrydata.md#phone)
* [postalCode](_types_.entrydata.md#postalcode)
* [promotions](_types_.entrydata.md#promotions)
* [tags](_types_.entrydata.md#tags)
* [twitter](_types_.entrydata.md#twitter)
* [uid](_types_.entrydata.md#uid)
* [validUntil](_types_.entrydata.md#validuntil)
* [website](_types_.entrydata.md#website)
* [zvr](_types_.entrydata.md#zvr)

## Properties

###  address

• **address**: *string*

The address line typically including a street name and a house number or similar.

___

###  city

• **city**: *string*

The city name part of the address.

___

###  countryCode

• **countryCode**: *string*

The ISO 3166-1 alpha-2 code of the entry.

___

###  description

• **description**: *string*

A description of the entry.

___

###  email

• **email**: *string*

A general e-mail contact.

___

###  emailHidden

• **emailHidden**: *boolean*

If true, the provided e-mail should not be visible in exports.

___

###  facebook

• **facebook**: *string*

Facebook Page ID or name.

___

###  foursquare

• **foursquare**: *string*

The venue id of the location on Foursquare / Swarm.

___

###  hours

• **hours**: *[Hours](_types_.hours.md)*

___

###  hoursRemark

• **hoursRemark**: *string*

___

###  insideOf

• **insideOf**: *null | string*

The unique ID of an existing entry where this one is contained in.

___

###  instagram

• **instagram**: *string*

Instagram account name.

___

###  keywords

• **keywords**: *string[]*

An array of keywords, synonym names and alternative spellings.

___

###  label

• **label**: *string*

A short label of the entry to be used as button text or other UI-like elements.

___

###  latitude

• **latitude**: *number | null*

___

### `Optional` licensingInformation

• **licensingInformation**? : *undefined | string*

___

###  longitude

• **longitude**: *number | null*

___

###  name

• **name**: *string*

The name of the entry.

___

###  phone

• **phone**: *string*

Phone number of the entry.

___

###  postalCode

• **postalCode**: *string*

The postal code of the address.

___

###  promotions

• **promotions**: *[Promotion](_types_.promotion.md)[]*

___

###  tags

• **tags**: *string[]*

___

###  twitter

• **twitter**: *string*

Twitter handle without the leading @.

___

###  uid

• **uid**: *string*

___

###  validUntil

• **validUntil**: *null | string*

A ISO 8601 compliant date or date time string in UTC. Format must be:
YYYY-MM-DDTHH:mm:ss.sssZ

___

###  website

• **website**: *string*

The full URL to the website.

___

###  zvr

• **zvr**: *string*
