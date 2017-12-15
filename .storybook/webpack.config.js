const path = require('path');
var StyleLintPlugin = require('stylelint-webpack-plugin');

// We are extending the default storybook webpack config.
// https://github.com/storybooks/storybook/blob/master/app/react/src/server/config/defaults/webpack.config.js

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  storybookBaseConfig.plugins.push(
      new StyleLintPlugin({
          configFile: path.resolve(__dirname, '../.stylelintrc.js'),
          context: path.resolve(__dirname, '../src'),
          syntax: 'scss'
      }),
  );

  storybookBaseConfig.module.rules.push({
    test: /\.scss$/,
    loaders: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
            importLoaders: 1,
        }
      },
      "sass-loader"
    ],
    include: path.resolve(__dirname, '../src')
  });

  storybookBaseConfig.module.rules.push({
    test: /\.js$/,
    enforce: "pre",
    loader: "eslint-loader",
    options: {
        emitWarning: true
    },
    include: path.resolve(__dirname, '../src')
  });

  storybookBaseConfig.module.rules.push({
    test: /\.js$/,
    loader: "babel-loader",
    include: path.resolve(__dirname, '../src')
  });

  return storybookBaseConfig;
};
