const path = require('path');
const clone = require('clone');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const libraryName = 'ui-react';

const defaultConfig = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist/umd'),
        filename: `${libraryName}.js`,
        library: libraryName,
        libraryTarget: 'umd',
    },
    module: {
        rules: [{
            test: /\.scss$/,
            exclude: /node_modules\//,
            use: [{
                loader: 'style-loader',
            }, {
                loader: 'css-loader',
            }, {
                loader: 'sass-loader',
            }],
        }, {
            test: /\.js$/,
            exclude: /node_modules\//,
            use: [{
                loader: 'babel-loader',
            }],
        }, {
            test: /\.svg$/,
            exclude: /node_modules\//,
            use: [{
                loader: 'babel-loader',
            }, {
                loader: 'react-svg-loader',
                options: {
                    jsx: true,
                },
            }],
        }],
    },
    externals: {
        react: {
            root: 'React',
            umd: 'react',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            umd: 'react-dom',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
        },
        'prop-types': {
            root: 'PropTypes',
            umd: 'prop-types',
            commonjs2: 'prop-types',
            commonjs: 'prop-types',
            amd: 'prop-types',
        },
    },
};

const minifiedBundleConfig = clone(defaultConfig);
minifiedBundleConfig.output.filename = `${libraryName}.min.js`;
minifiedBundleConfig.plugins = [new UglifyJsPlugin({ sourceMap: false })];

module.exports = [
    defaultConfig,
    minifiedBundleConfig,
];
