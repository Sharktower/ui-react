// Karma configuration
const webpackConfig = require('./webpack.config.js');

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
            'src/*.js',
            'src/**/*.test.js',
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
        reporters: ['spec'],

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
