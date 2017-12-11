This document gives the user an insight of how to install Codeceptjs, pre-requisites before starting a test and how to execute a test.

Codeceptjs Installation

yarn add -D codeceptjs-webdriverio - Install codeceptjs and WebdriverIO
yarn testint  - To run the Codecept commands/Is an alias for ./node_modules/.bin/codeceptjs

Codecpt.js config file and what it contains
./src/codecept.json - path for config file
"tests": "./src/components/**/testint_*.js" -- Path where test scripts are available and needs to be executed
"output": "./src/testint_support/output" -- Path where output results are stored. ex., log files, screenshots, reports etc.,
"helpers": --- Gives details about the url to execute the tests on, the browser to be used and all the required pre-requiste details to ensure the test is run successfully


To Execute Test

Go to ./src/testint_support directory
Execute `testint-setup` bash file :
This file Includes

`yarn selenium install` - Start the selenium server
`yarn selenium start` - Start the selenium if process is not running
`yarn storybook` - To start story book if process is not running

To execute the codecept test :
`yarn testint run --verbose` - Run test with internal logs printed
