const clone = require('clone');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const libraryName = 'ui-react';

const umdConfig = {
    entry: path.resolve(__dirname, './lib/index.js'),
    output: {
        path: path.resolve(__dirname, './dist/'),
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
        }, {
            test: /\.(png|jpg|gif)$/,
            exclude: /node_modules\//,
            use: [{
                loader: 'base64-inline-loader?limit=2000&name=[name].[ext]',
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

const minifiedUmdConfig = clone(umdConfig);
minifiedUmdConfig.output.filename = `${libraryName}.min.js`;
minifiedUmdConfig.plugins = [
    new UglifyJsPlugin({ sourceMap: false }),
];

module.exports = [
    umdConfig,
    minifiedUmdConfig,
];
