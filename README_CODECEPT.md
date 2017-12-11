## Guide to CodeceptJS and all that is Golden

### Purpose

This document gives the user an insight of how to install Codeceptjs, pre-requisites before starting a test and how to execute a test.

### CodeceptJS Installation and Setup

Only required in the even that the suite needs to be re-installed.
```bash
yarn install -- only needs to be run once
yarn testint:setup -- run whenever storybook or selenium needs to be started
```
Now you are ready to run your tests in a new terminal window!

NB: Writing an initial test can be found on: http://codecept.io/quickstart/#creating-first-test
Please note that the `yarn testint` command should be used in place of `codeceptjs` (e.g. `yarn testint gt` to generate tests).

### Execute Tests

To execute the codecept test:
`yarn testint run --verbose` - Run test with internal logs printed
yarn testint  - To run the Codecept commands/Is an alias for ./node_modules/.bin/codeceptjs

### Configuration: codecept.json

Path of config file: `./codecept.json`

Annotations:
```js
{
  "output": "./src/testint_support/output", //Path where output results are stored. ex., log files, screenshots, reports etc. This folder is included in `.gitignore` so is ignored by commits.
  "helpers": {
    "WebDriverIO": { //Defines webdriver configurations, which are based on Codecept defaults and Selenium Capabilities: https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
      "url": "http://localhost:6006",
      "browser": "chrome",
      "desiredCapabilities": {
        "chromeOptions": {
          "args": ["--headless", "--start-maximized"] // runs Chrome in headless mode and maximized headless window size
        }
      }
    }
  },
  "include": { //Defines custom step and page object locations
    "I": "./src/testint_support/steps_file.js",
    "mapper": "./src/testint_support/mapper.js" //Stores URLs in one place for maintainability
  },
  "mocha": {},
  "bootstrap": false,
  "teardown": null,
  "hooks": [],
  "tests": "./src/components/**/testint_*.js", //Location of test scripts (i.e. any file within the`components` folder with a `testint_` prefix and `.js` suffix).
  "timeout": 10000,
  "name": "ui-react" //Codecepts reference of the 'home' folder, whence all previous paths have been referenced
}
```
General explanations of the `codecept.json` file can be found on http://codecept.io/configuration/ and http://codecept.io/helpers/WebDriverIO/.

---
### Appendix
#### Installing CodeceptJS from Scratch
In the strange even that CodeceptJS needs to be reinstalled entirely within the repo, run:
`yarn add -D codeceptjs-webdriverio`

#### yarn testint:setup
Executes `testint-setup` bash file:
This file Includes:

`yarn selenium install` - Start the selenium server
`yarn selenium start` - Start the selenium if process is not running
`yarn storybook` - Start story book if process is not running
