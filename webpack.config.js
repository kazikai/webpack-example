const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './app.js',
    output: {
        path: './dist/resources/js/',
        filename: 'app.js'
    },
    loaders: [
      {
        test: /\.hbs$/,
        loader: 'handlebars'
      }
    ],
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
        new HtmlWebpackPlugin({
            title: 'Test App',
            template: 'docs/index.hbs'
        })
    ]
};
