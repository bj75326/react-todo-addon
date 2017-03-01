/**
 * Created by jibin on 17/2/19.
 */

//webpack.config.js

var webpack = require('webpack');

module.exports = {

    devtool: 'eval-source-map',

    entry: [
        "./src/entry.js"
    ],
    output: {
        path: "./out",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }

};
