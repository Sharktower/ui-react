## Guide to CodeceptJS and all that is Golden

### Purpose

This document gives the user an insight of how to use CodeceptJS, including pre-requisites before starting a test, and how to execute a test.

### CodeceptJS Installation and Setup

NB: `yarn test:int` is an alias for `codeceptjs` command.

```bash
yarn install # Only needs to be run once
```

NB: Writing an initial test can be found on: http://codecept.io/quickstart/#creating-first-test.

### Test files

Files follow this format `MyComponent.test-int.js`

### Execute Tests

Prepare the test runner:

```bash
yarn test:int-setup # Run whenever storybook or selenium needs to be started
```

Now you are ready to run your tests in a new terminal window!

To execute the codecept test:
```bash
yarn test:int --verbose # Run test with internal logs printed
```

Further commands can be found on http://codecept.io/commands/.

### Configuration: codecept.json

Path of config file: `./codecept.json`

Annotations:
```js
{
  "output": "./test/codecept/output", // Path where output results are stored. ex., log files, screenshots, reports etc. This folder is included in `.gitignore` so is ignored by commits.
  "helpers": {
    "WebDriverIO": { // Defines webdriver configurations, which are based on Codecept defaults and Selenium Capabilities: https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
      "url": "http://localhost:6006",
      "browser": "chrome",
      "desiredCapabilities": {
        "chromeOptions": {
          "args": ["--headless", "--start-maximized"] // Runs Chrome in headless mode and maximized headless window size
        }
      }
    }
  },
  "include": { // Defines custom step and page object locations
    "I": "./test/codecept/steps_file.js",
    "mapper": "./test/codecept/mapper.js" // Stores URLs in one place for maintainability
  },
  "mocha": {},
  "bootstrap": false,
  "teardown": null,
  "hooks": [],
  "tests": "./src/components/**/*.test-int.js", // Location of test scripts (i.e. any file within the`components` folder with a `testint_` prefix and `.js` suffix).
  "timeout": 10000,
  "name": "ui-react" // Codecepts reference of the 'home' folder, whence all previous paths have been referenced
}
```
General explanations of the `codecept.json` file can be found on http://codecept.io/configuration/ and http://codecept.io/helpers/WebDriverIO/.

---
### Appendix
#### Installing CodeceptJS from Scratch
In the strange event that CodeceptJS needs to be reinstalled entirely within the repo, run:

`yarn add -D codeceptjs-webdriverio`
