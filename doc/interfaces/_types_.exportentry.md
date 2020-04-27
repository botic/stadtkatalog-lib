
# Interface: ExportEntry

## Hierarchy

* [EntryData](_types_.entrydata.md)

  ↳ **ExportEntry**

## Index

### Properties

* [_assets](_types_.exportentry.md#optional-_assets)
* [_created](_types_.exportentry.md#_created)
* [_id](_types_.exportentry.md#_id)
* [_modified](_types_.exportentry.md#_modified)
* [address](_types_.exportentry.md#address)
* [city](_types_.exportentry.md#city)
* [countryCode](_types_.exportentry.md#countrycode)
* [description](_types_.exportentry.md#description)
* [email](_types_.exportentry.md#email)
* [emailHidden](_types_.exportentry.md#emailhidden)
* [facebook](_types_.exportentry.md#facebook)
* [foursquare](_types_.exportentry.md#foursquare)
* [hours](_types_.exportentry.md#hours)
* [hoursRemark](_types_.exportentry.md#hoursremark)
* [insideOf](_types_.exportentry.md#insideof)
* [instagram](_types_.exportentry.md#instagram)
* [keywords](_types_.exportentry.md#keywords)
* [label](_types_.exportentry.md#label)
* [latitude](_types_.exportentry.md#latitude)
* [licensingInformation](_types_.exportentry.md#optional-licensinginformation)
* [longitude](_types_.exportentry.md#longitude)
* [name](_types_.exportentry.md#name)
* [phone](_types_.exportentry.md#phone)
* [postalCode](_types_.exportentry.md#postalcode)
* [promotions](_types_.exportentry.md#promotions)
* [tags](_types_.exportentry.md#tags)
* [twitter](_types_.exportentry.md#twitter)
* [uid](_types_.exportentry.md#uid)
* [validUntil](_types_.exportentry.md#validuntil)
* [website](_types_.exportentry.md#website)
* [zvr](_types_.exportentry.md#zvr)

## Properties

### `Optional` _assets

• **_assets**? : *[Asset](_types_.asset.md)[]*

___

###  _created

• **_created**: *string*

___

###  _id

• **_id**: *string*

___

###  _modified

• **_modified**: *string*

___

###  address

• **address**: *string*

*Inherited from [EntryData](_types_.entrydata.md).[address](_types_.entrydata.md#address)*

The address line typically including a street name and a house number or similar.

___

###  city

• **city**: *string*

*Inherited from [EntryData](_types_.entrydata.md).[city](_types_.entrydata.md#city)*

The city name part of the address.

___

###  countryCode

• **countryCode**: *string*

*Inherited from [EntryData](_types_.entrydata.md).[countryCode](_types_.entrydata.md#countrycode)*

The ISO 3166-1 alpha-2 code of the entry.

___

###  description

• **description**: *string*

*Inherited from [EntryData](_types_.entrydata.md).[description](_types_.entrydata.md#description)*

A description of the entry.

___

###  email

• **email**: *string*

*Inherited from [EntryData](_types_.entrydata.md).[email](_types_.entrydata.md#email)*

A general e-mail contact.

___

###  emailHidden

• **emailHidden**: *boolean*

*Inherited from [EntryData](_types_.entrydata.md).[emailHidden](_types_.entrydata.md#emailhidden)*

If true, the provided e-mail should not be visible in exports.

___

###  facebook

• **facebook**: *string*

*Inherited from [EntryData](_types_.entrydata.md).[facebook](_types_.entrydata.md#facebook)*

Facebook Page ID or name.

___

###  foursquare

• **foursquare**: *string*

*Inherited from [EntryData](_types_.entrydata.md).[foursquare](_types_.entrydata.md#foursquare)*

The venue id of the location on Foursquare / Swarm.

___

###  hours

• **hours**: *[Hours](_types_.hours.md)*

*Inherited from [EntryData](_types_.entrydata.md).[hours](_types_.entrydata.md#hours)*

___

###  hoursRemark

• **hoursRemark**: *string*

*Inherited from [EntryData](_types_.entrydata.md).[hoursRemark](_types_.entrydata.md#hoursremark)*

___

###  insideOf

• **insideOf**: *null | string*

*Inherited from [EntryData](_types_.entrydata.md).[insideOf](_types_.entrydata.md#insideof)*

The unique ID of an existing entry where this one is contained in.

___

###  instagram

• **instagram**: *string*

*Inherited from [EntryData](_types_.entrydata.md).[instagram](_types_.entrydata.md#instagram)*

Instagram account name.

___

###  keywords

• **keywords**: *string[]*

*Inherited from [EntryData](_types_.entrydata.md).[keywords](_types_.entrydata.md#keywords)*

An array of keywords, synonym names and alternative spellings.

___

###  label

• **label**: *string*

*Inherited from [EntryData](_types_.entrydata.md).[label](_types_.entrydata.md#label)*

A short label of the entry to be used as button text or other UI-like elements.

___

###  latitude

• **latitude**: *number | null*

*Inherited from [EntryData](_types_.entrydata.md).[latitude](_types_.entrydata.md#latitude)*

___

### `Optional` licensingInformation

• **licensingInformation**? : *undefined | string*

*Inherited from [EntryData](_types_.entrydata.md).[licensingInformation](_types_.entrydata.md#optional-licensinginformation)*

___

###  longitude

• **longitude**: *number | null*

*Inherited from [EntryData](_types_.entrydata.md).[longitude](_types_.entrydata.md#longitude)*

___

###  name

• **name**: *string*

*Inherited from [EntryData](_types_.entrydata.md).[name](_types_.entrydata.md#name)*

The name of the entry.

___

###  phone

• **phone**: *string*

*Inherited from [EntryData](_types_.entrydata.md).[phone](_types_.entrydata.md#phone)*

Phone number of the entry.

___

###  postalCode

• **postalCode**: *string*

*Inherited from [EntryData](_types_.entrydata.md).[postalCode](_types_.entrydata.md#postalcode)*

The postal code of the address.

___

###  promotions

• **promotions**: *[Promotion](_types_.promotion.md)[]*

*Inherited from [EntryData](_types_.entrydata.md).[promotions](_types_.entrydata.md#promotions)*

___

###  tags

• **tags**: *string[]*

*Inherited from [EntryData](_types_.entrydata.md).[tags](_types_.entrydata.md#tags)*

___

###  twitter

• **twitter**: *string*

*Inherited from [EntryData](_types_.entrydata.md).[twitter](_types_.entrydata.md#twitter)*

Twitter handle without the leading @.

___

###  uid

• **uid**: *string*

*Inherited from [EntryData](_types_.entrydata.md).[uid](_types_.entrydata.md#uid)*

___

###  validUntil

• **validUntil**: *null | string*

*Inherited from [EntryData](_types_.entrydata.md).[validUntil](_types_.entrydata.md#validuntil)*

A ISO 8601 compliant date or date time string in UTC. Format must be:
YYYY-MM-DDTHH:mm:ss.sssZ

___

###  website

• **website**: *string*

*Inherited from [EntryData](_types_.entrydata.md).[website](_types_.entrydata.md#website)*

The full URL to the website.

___

###  zvr

• **zvr**: *string*

*Inherited from [EntryData](_types_.entrydata.md).[zvr](_types_.entrydata.md#zvr)*
