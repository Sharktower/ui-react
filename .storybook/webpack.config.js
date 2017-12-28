const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const webpackConfig = require('../webpack.config.js')[0];

// We are extending the default storybook webpack config.
// https://github.com/storybooks/storybook/blob/master/app/react/src/server/config/defaults/webpack.config.js

module.exports = (storybookWebpackConfig, configType) => {

    storybookWebpackConfig.plugins.push(
        new StyleLintPlugin({
            configFile: path.resolve(__dirname, '../.stylelintrc.js'),
            context: path.resolve(__dirname, '../src'),
            syntax: 'scss'
        }),
    );

    storybookWebpackConfig.module.rules.push({
        test: /\.js$/,
        enforce: "pre",
        loader: "eslint-loader",
        options: {
            emitWarning: true
        },
        include: path.resolve(__dirname, '../src')
    });

    webpackConfig.module.rules.forEach(rule => storybookWebpackConfig.module.rules.push(rule));

    return storybookWebpackConfig;
};
