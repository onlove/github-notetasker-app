var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var node_modules = path.resolve(__dirname, 'node_modules');

module.exports ={
    entry: {
        index: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8092',
            path.resolve(__dirname, './app/index.js')
        ],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js",
        publicPath: '/'
    },
    resolve: {
        extension: ['', '.js', '.jsx', '.json'],
        alias: []
    },
    'display-error-details': true,
    externals: [],
    module:{
        noParse: [
            path.resolve(node_modules, 'react/dist/react.min.js'),
            path.resolve(node_modules, 'react-dom/dist/react-dom..min.js')
        ],
        loaders: [
            {
                test: /\.js[x]?$/,
                loaders: ['react-hot', 'babel'],
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less/,
                loader:ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192'
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000"
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: 'build',
        port: 8092,
        stats: { colors: true }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new HtmlWebpackPlugin({
            title: 'your title app',
            template: './app/index.html'
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8092'
        }),
        new ExtractTextPlugin("main.css", {
            allChunks: true,
            disable: false
        })
    ]
}
