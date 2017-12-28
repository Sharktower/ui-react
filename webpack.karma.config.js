const webpackConfig = require('./webpack.config.js')[0];

const karmaWebpackConfig = {
    module: {
        rules: [{
            // required by the coverage reporter
            test: /\.js$/,
            use: {
                loader: 'istanbul-instrumenter-loader',
                options: { esModules: true },
            },
            enforce: 'post',
            exclude: [
                /(test|node_modules)\//,
                modulePath => modulePath.endsWith('.test.js') ||
                              modulePath.endsWith('.test-int.js') ||
                              modulePath.endsWith('.story.js'),
            ],
        }],
    },
    devtool: 'inline-source-map',
};

webpackConfig.module.rules.forEach(rule => karmaWebpackConfig.module.rules.push(rule));

module.exports = karmaWebpackConfig;
