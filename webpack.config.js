const webpack = require('webpack');
module.exports = {
    entry: './app.js',
    output: {
        path: './dist',
        filename: 'app.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
};
