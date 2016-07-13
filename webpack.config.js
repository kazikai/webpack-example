const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './app.js',
    output: {
        path: './dist/',
        filename: 'resources/js/script.js'
    },
    loaders: [ {
            test: /\.hbs$/,
            loader: 'handlebars'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
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
            title: '신청화면',
            template: 'docs/register.hbs',
            inject: "body",
            filename: "register.html"
        }),
        new HtmlWebpackPlugin({
            title: '조회화면',
            template: 'docs/verify.hbs',
            inject: "body",
            filename: "verify.html"
        }),
        new HtmlWebpackPlugin({
            title: '승인화면',
            template: 'docs/manage.hbs',
            inject: "body",
            filename: "manage.html"
        }),
        new ExtractTextPlugin("styles.css")
    ]
};
