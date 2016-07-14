const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

//const CommonsChunkPlugin = require("commonsChunkPlugin");

module.exports = {
    entry: {
        script: './resources/js/app.js',
        page: './resources/js/page.js'
        //c: ["./c", "./d"]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "resources/js/[name].js",
    },
    loaders: [ {
            test: /\.hbs$/,
            loader: 'handlebars'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }, {
            test: /\.png$/,
            loader: "file-loader"
        }

    ],
    plugins: [
        //new webpack.optimize.CommonsChunkPlugin({
        //    name: "commons",
        //    filename: "resources/js/commons.js",
        //    chunks: [ 'script' ],
        //}),
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
            //inject: "body",
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
        new ExtractTextPlugin("resources/css/[name].css")
    ]
};
