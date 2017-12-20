const path = require('path');

module.exports = {
    entry: './src',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'ui-react.js',
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: 'style-loader',
            }, {
                loader: 'css-loader',
            }, {
                loader: 'sass-loader',
            }],
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
            }],
        }, {
            test: /\.svg$/,
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
};
