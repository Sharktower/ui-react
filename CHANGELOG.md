<!-- Last Updated: 2019-01-15 16:57:16 -->

# UI React v3.8.0 (2019-01-15 16:57:16)

## Add autoComplete prop to TextField and TextArea



**Backwards Compatibility Implications** 

_None_

**New Features** 

- Added `autoComplete` prop to `TextField` and `TextArea`

**Bug Fixes** 

_None_


## Fix missing icons exports



**Backwards Compatibility Implications** 

_None_

**New Features** 

_None_

**Bug Fixes** 

- Add missing `/lib` exports for the latest icons (added in https://github.com/Mudano/ui-react/pull/126 ) to ensure they can be imported directly from `@mudano/ui-react`




# UI React v3.7.1 (2018-11-01 11:15:08)

## Fixes TextField label overlapping the autofilled value in Chrome



**Backwards Compatibility Implications** 

_None_

**New Features** 

_None_

**Bug Fixes** 

- Fixes `TextField` label overlapping the autofilled field value in Chrome
Thanks to the Klarna team for the solution: https://medium.com/@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
Their implementation can be found here:
https://github.com/klarna/ui/blob/v4.10.0/Field/index.jsx#L104-L114
https://github.com/klarna/ui/blob/v4.10.0/Field/styles.scss#L228-L241




# UI React v3.7.0 (2018-10-11 11:22:26)

## Allow data- props



**Backwards Compatibility Implications**

_None_

**New Features**

- Allow any `data-` prefixed props on all components

**Bug Fixes**

_None_




# UI React v3.6.0 (2018-08-22 12:17:26)

## Update webpack and karma dependencies

**Backwards Compatibility Implications**

- Fixed class names of `IconEpic`, `IconInProgress`, `IconNotStarted`, `IconStory` and `IconTask`. This is a breaking change if anyone relied on the wrong class names.
- Updated `webpack` to v4.17.0 - this shouldn't be a breaking change but it's something to be aware of.

**New Features**

_None_

**Bug Fixes**

- Fixed wrong icon class names
- Fixed broken icon tests
- Added missing tests for the `Tabs` component

**Performance Improvements**

- Improves performance of unit tests




# UI React v3.5.2 (2018-08-21 15:49:06)

## Adjust publish script

**Backwards Compatibility Implications**

_None_

**New Features**

- Adjust publish script to check node version prior to publish

**Bug Fixes**

_None_


## Fix Tabs stealing focus on rerender

**Backwards Compatibility Implications**

The active pane in a set of Tabs will no longer steal focus each time its parent triggers a re-render. In theory, someone could have been relying on this behaviour, but it seems unlikely.

**New Features**

_None_

**Bug Fixes**

Call to `focusPane` on `render` now takes place in `componentDidUpdate` only when moving from unselected to selected. This fixes a bug where a TabsPane would steal focus from a sibling input whenever their parent triggered a re-render.




# UI React v3.5.0 (2018-07-26 17:42:31)

## New Project Icons

**Backwards Compatibility Implications**

_None_

**New Features**

- IconBlocked
- IconComplete
- IconEpic
- IconInProgress
- IconNotStarted
- IconStory
- IconTask

**Bug Fixes**

- Refined IconNotification, IconRequired SVGs




# UI React v3.4.0 (2018-06-21 16:09:24)

## IconKanban Component



**Backwards Compatibility Implications**

_None_

**New Features**

- IconKanban component

**Bug Fixes**

_None_




# UI React v3.3.1 (2018-06-20 16:08:57)

## Patch fix to add IconCalendar lib files

**Backwards Compatibility Implications**

_None_

**New Features**

_None_

**Bug Fixes**

Add IconCalendar export in lib files




# UI React v3.3.0 (2018-06-20 14:49:23)

## Add IconCalendar

**Backwards Compatibility Implications**

_None_

**New Features**

Add IconCalendar component

**Bug Fixes**

_None_




# UI React v3.2.2 (2018-06-12 16:35:11)

## Add componentRef prop to Button

**Backwards Compatibility Implications**

_None_

**New Features**

- adding `componentRef` prop to Button

**Bug Fixes**

_None_




# UI React v3.2.1 (2018-06-08 11:08:20)

## Switch AvatarMenu to auto width

**Backwards Compatibility Implications**

_None_

**New Features**

- allow AvatarMenu to expand based on content

**Bug Fixes**

_None_



# UI React v3.2.0 (2018-05-30 10:57:30)

## Fix AvatarMenu link width issue

**Backwards Compatibility Implications**

_None_

**New Features**

_None_

**Bug Fixes**

- fix the issue with links in AvatarMenu not filling full width of menu and being hard to click

## Set flatpickr version to 4.3.2 and fix DateField



**Backwards Compatibility Implications**

- Reverts Flatpickr version in the yarn.lock to v4.3.2 so it might cause compatibility issues to anyone who was relying on Flatpickr version 4.4.4

**New Features**

_None_

**Bug Fixes**

- Fix the layout of week day labels in date pickers
- Fix the functionality of month arrows in the `DateField` component's date picker




# UI React v3.1.0 (2018-05-03 10:24:59)

## AvatarMenu Component

**Backwards Compatibility Implications**

_None_

**New Features**

- add AvatarMenu component

**Bug Fixes**

_None_

## Breadcrumbs Component

**Backwards Compatibility Implications**

_None_

**New Features**

- new breadcrumb (with title) component

**Bug Fixes**

_None_

## New Icons

**Backwards Compatibility Implications**

_None_

**New Features**

- new dashboard icon
- new priority icon
- new project icon

**Bug Fixes**

_None_




# UI React v3.0.2 (2018-04-24 16:51:55)

## Textfield prefix zero value bug

**Backwards Compatibility Implications**

_None_

**New Features**

_None_

**Bug Fixes**

- fix the issue with prefix not being displayed if Textfield has 0 as a value




# UI React v3.0.1 (2018-04-06 17:11:10)

## [UR-72] Fix TextField focus when tooltip is rendered or removed

**Backwards Compatibility Implications**

_None_

**New Features**

_None_

**Bug Fixes**

- Fix TextField focus when tooltip is rendered or removed


## Fix issue with error border not displaying

**Backwards Compatibility Implications**

_None_

**New Features**

_None_

**Bug Fixes**

- fix the issue with error border not displaying on invalid TextFields


## Fix issue with TextField and TextArea not handling null

**Backwards Compatibility Implications**

_None_

**New Features**

_None_

**Bug Fixes**

- fix issue with TextField and TextArea not handling null



# UI React v3.0.0 (2018-03-27 11:51:11)

## Increase TextField font size from 13px to 16px

**Backwards Compatibility Implications**

- TextField font size increase from 13px to 16px

**New Features**

_None_

**Bug Fixes**

_None_



# UI React v2.4.0 (2018-03-27 11:34:51)

## Add prefix prop to TextField

**Backwards Compatibility Implications**

_None_

**New Features**

- add prefix as an option instead of an icon, that only shows when an input has focus or a value

**Bug Fixes**

_None_

## Adjust position of TextField bottom border

**Backwards Compatibility Implications**

_None_

**New Features**

_None_

**Bug Fixes**

- keep bottom border aligned to input even when TextField is laid out with flex box


## TextField accepts zero as a valid input

**Backwards Compatibility Implications**

_None_

**New Features**

_None_

**Bug Fixes**

- allow zero to activate TextField and move label

## TextField icon click gives focus to input

**Backwards Compatibility Implications**

_None_

**New Features**

_None_

**Bug Fixes**

- TextField icon click gives input focus

## Allow step, max, min attribute to be set for any input type

**Backwards Compatibility Implications**

_None_

**New Features**

- allow step, mix and max attributes for any input type, not just number

**Bug Fixes**

_None_



# UI React v2.3.0 (2018-03-23 13:10:14)

## Allow step, max, min attribute to be set for any input type

**Backwards Compatibility Implications**

_None_

**New Features**

- allow step, mix and max attributes for any input type, not just number

**Bug Fixes**

_None_

## Add step, max & min props to textfield

**Backwards Compatibility Implications**
_None_

**New Features**

- add step prop to TextField
- add max prop to TextField
- add min prop to TextField

**Bug Fixes**

_None_




# UI React v2.2.0 (2018-03-21 16:00:57)

## Control date picker position

**Backwards Compatibility Implications**

_None_

**New Features**

- add datePickerPosition prop to DateField

**Bug Fixes**

_None_

## Export DateFieldRange, DateInlinePicker and IconArrowLongRight

**Backwards Compatibility Implications**

_None_

**New Features**

_None_

**Bug Fixes**

- Export DateFieldRange, DateInlinePicker and IconArrowLongRight in the build bundle




# UI React v2.1.1 (2018-03-13 19:35:35)

## Export DateFieldRange, DateInlinePicker and IconArrowLongRight

**Backwards Compatibility Implications**

_None_

**New Features**

_None_

**Bug Fixes**

- Export DateFieldRange, DateInlinePicker and IconArrowLongRight in the build bundle



# UI React v2.1.0 (2018-03-12 21:25:28)

## DateField and InlineDatePicker

**Backwards Compatibility Implications**

_None_

**New Features**

 - DateField
 - DateFieldRange
 - InlineDatePicker

**Bug Fixes**

_None_

## Clear button triggers input change

**Backwards Compatibility Implications**

_None_

**New Features**

- clicking the clear icon will now trigger the input change event

**Bug Fixes**

_None_



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