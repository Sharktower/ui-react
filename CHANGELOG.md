<!-- Last Updated: 2018-02-26 15:12:08 -->

# UI React v2.0.3 (2018-02-26 15:12:08)

## Clear button triggers input change

**Backwards Compatibility Implications**

_None_

**New Features**

- clicking the clear icon will now trigger the input change event

**Bug Fixes**

_None_



# UI React v2.0.2 (2018-02-23 10:45:28)

## Decrease Button padding

**Backwards Compatibility Implications** 

_None_

**New Features**

_None_

**Bug Fixes**

_None_

**Miscellaneous**

- Decreased Button padding to match the latest design


## Button resizes to contain confirmation text

**Backwards Compatibility Implications**

_None_

**New Features**

_None_

**Bug Fixes**

- Button now automatically resizes to contain long confirmation text and prevent overflow and misalignment




# UI React v2.0.1 (2018-02-22)

## Fix event property persistence

**Backwards Compatibility Implications**

_None_

**New Features**

_None_

**Bug Fixes**

- fixed issue with async event props not being persisted



# UI React v2.0.0 (2018-02-21)

## TextArea auto resizes by default

**Backwards Compatibility Implications**

- `hasAutoHeight` prop removed from TextArea

**New Features**

- `hasFixedHeight` prop added to TextArea

**Bug Fixes**

_None_

## TextField and TextArea label appears by default

**Backwards Compatibility Implications**

- `hasLabelAlways` prop removed from TextField and TextArea

**New Features**

- `autoHideLabel` prop added to TextField and TextArea

**Bug Fixes**

_None_

## Display TextField and TextArea error tooltip only if not valid

**Backwards Compatibility Implications**

- `isValid` and `errorTooltip` are no longer mutually exclusive, however, their functions do not change.

**New Features**

_None_

**Bug Fixes**

- `errorTooltip` will now **only** display if `isValid` is false.

## Remove TextField icon spans when not in use

**Backwards Compatibility Implications**

_None_

**New Features**

_None_

**Bug Fixes**

- Previously the layout spans for the TextField icons would stay in the DOM even if no icon was being displayed.  This fixes that small bug and removes the spans if they are not in use.

## Fix to allow TextField and TextArea value to be updated via props

**Backwards Compatibility Implications**

_None_

**New Features**

_None_

**Bug Fixes**

- Can now update TextField and TextValue value via props



# UI React v1.2.0 (2018-02-13)

## TextField and TextArea Component

**Backwards Compatibility Implications**

_None_

**New Features**

New components:

- TextField
- TextArea
- IconClear
- IconNotification
- IconRequired
- IconSearch

**Bug Fixes**

- Fixed some minor rendering issues with Icons

**Miscellaneous**

- Clarify that issues should be reported via email (ui-react@mudano.com)


## Tabs Component

**Backwards Compatibility Implications**

_None_

**New Features**

- `Tabs` component
- `IconMore` component

**Bug Fixes**

_None_

**Miscellaneous**

- Updated `Button` component colours


## Button aria-expanded prop

**Backwards Compatibility Implications**

_None_

**New Features**

- Added `aria-expanded` prop to the `Button` component

**Bug Fixes**

_None_




# UI React v1.1.1 (2018-01-30)

## Fix Button confirmation state

**Backwards Compatibility Implications**

_None_

**New Features**

_None_

**Bug Fixes**

- Fixes Button confirmation state in Firefox and Internet Explorer





# UI React v1.1.0 (2018-01-29)

## Button id prop

**Backwards Compatibility Implications**

_None_

**New Features**

- Added `id` prop to the Button component

**Bug Fixes**

_None_




# UI React v1.0.1 (2018-01-19)

## UMD Bundle and CommonJS Modules

**Backwards Compatibility Implications**

_none_

**New Features**

 - Adds UMD bundle, accessible as the primary entry point for the package
 - Adds CommonJS modules with individual CSS as a third option (keeps ES6 native modules)

**Bug Fixes**

- Fixes bug that prevented access to Avatar and Tooltip components

**Miscellaneous**

- Updated usage documentation


## Button Component

**Backwards Compatibility Implications**

_None_

**New Features**

- `Button` component
- `IconArrow` component

**Bug Fixes**

_None_



# UI React v1.0.0 (2018-01-17)

## Build Tooling (for NPM)

**Backwards Compatibility Implications**

 - Removes scripts that created UMD bundle

**New Features**

 - New build scripts to export ES6 native modules
 - New scripts to help with versioning and publish to NPM

**Bug Fixes**

_None_

**Miscellaneous**

- Swaps licence to Apache 2.0

## New Avatar & Tooltip Components

**Backwards Compatibility Implications**

_None_

**New Features**  

- `Avatar` component
- `AvatarTitle` component
- `AvatarCard` component
- `Tooltip` component
- `TooltipBox` component

**Bug Fixes**  

_None_

**Miscellaneous**  

- New StoryBook documentation