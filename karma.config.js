// Karma configuration
const path = require('path');

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
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        exclude: path.resolve(__dirname, 'node_modules'),
                        query: {
                            presets: ['es2015', 'stage-2', 'react'],
                        },
                    },
                    {
                        test: /\.css$/,
                        loader: 'css-loader',
                    },
                ],
            },
            externals: {
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true,
            },
        },
        webpackServer: {
            noInfo: false,
        },

        // Test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

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
    });
};
