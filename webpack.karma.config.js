const webpackConfig = require('./webpack.config.js')[0];

const karmaWebpackConfig = {
    mode: 'development',
    module: {
        rules: [],
    },
    devtool: 'inline-source-map',
};

webpackConfig.module.rules.forEach(rule => karmaWebpackConfig.module.rules.push(rule));

module.exports = karmaWebpackConfig;
