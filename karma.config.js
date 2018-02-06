// Karma configuration
const path = require('path');
const webpackConfig = require('./webpack.karma.config.js');

module.exports = (config) => {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // Frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha'],

        // list of files / patterns to load in the browser
        files: [
            'test/unit/setupEnvironment.js',
            'src/**/*.test.js',
            'src/**/*.js',
        ],

        // list of files to exclude
        exclude: [
            'src/**/*.story.js',
            'src/**/*.test-int.js',
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/*.js': ['webpack'],
            'test/**/*.js': ['webpack'],
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: false,
            quiet: false,
        },

        // Test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec', 'coverage-istanbul'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // Level of logging
        // possible values:
        //   config.LOG_DISABLE ||
        //   config.LOG_ERROR ||
        //   config.LOG_WARN ||
        //   config.LOG_INFO ||
        //   config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['ChromeHeadless'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        // Reporter options
        // any of these options are valid: https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-api/lib/config.js#L33-L39
        coverageIstanbulReporter: {

            // Reports can be any that are listed here: https://github.com/istanbuljs/istanbuljs/tree/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib
            reports: ['html', 'lcovonly', 'text-summary'],

            // Base output directory.
            // If you include %browser% in the path it will be replaced with the karma browser name
            dir: path.join(__dirname, 'test/unit/coverage'),

            // If using webpack and pre-loaders, work around webpack breaking the source path
            fixWebpackSourcePaths: true,

            // Stop istanbul outputting messages like:
            // `File [${filename}] ignored, nothing could be mapped`
            skipFilesWithNoCoverage: false,

            // Most reporters accept additional config options.
            // You can pass these through the `report-config` option
            'report-config': {
                // all options available at: https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/html/index.js#L135-L137
                html: {
                    // outputs the report in ./coverage/html
                    subdir: 'html',
                },
            },

            // Enforce percentage thresholds
            // Anything under these percentages will cause karma to fail
            // with an exit code of 1 if not running in watch mode
            thresholds: {
                // Set to `true` to not fail the test command when thresholds are not met
                emitWarning: false,
                // Thresholds for all files
                global: {
                    statements: 100,
                    lines: 100,
                    branches: 100,
                    functions: 100,
                },
                each: {
                    // Thresholds per file
                    statements: 100,
                    lines: 100,
                    branches: 100,
                    functions: 100,
                    // To override thresholds per file:
                    // overrides: {
                    //     'baz/component/**/*.js': {
                    //         statements: 98,
                    //     },
                    // },
                },
            },
        },
        specReporter: {
            maxLogLines: 100, // limit number of lines logged per test
            suppressErrorSummary: false, // do not print error summary
            suppressFailed: false, // do not print information about failed tests
            suppressPassed: false, // do not print information about passed tests
            suppressSkipped: true, // do not print information about skipped tests
            showSpecTiming: true, // print the time elapsed for each spec
        },
    });
};
