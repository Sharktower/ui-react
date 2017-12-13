const path = require('path');

// We are extending the default storybook webpack config. 
// https://github.com/storybooks/storybook/blob/master/app/react/src/server/config/defaults/webpack.config.js

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // TODO: I would like to remove this rule, and let load CSS via default config
  // But unless I specify this rule, eslint-loader tries to lint our CSS, failing.
  // .eslintignore doesn't work neither
  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    loaders: [
      "style-loader", 
      {
        loader: "css-loader",
        options: {
          importLoaders: 1,
        }
      }
    ],
    include: path.resolve(__dirname, '../')
  });

  storybookBaseConfig.module.rules.push({
    test: /\.js$/,
    enforce: "pre",
    exclude: /node_modules/,
    loader: "eslint-loader",
    options: {
        emitWarning: true
    },
    include: path.resolve(__dirname, '../src')
  });

  storybookBaseConfig.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "babel-loader",
    include: path.resolve(__dirname, '../src')
  });

  // Return the altered config
  return storybookBaseConfig;
};
