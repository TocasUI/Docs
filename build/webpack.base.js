'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const postcss = [
    require('autoprefixer')({
        browsers: ['last 2 versions', 'ie > 8']
    })
]

module.exports = {
    entry: {
        client: './client/bootstrap.js'
    },
    output: {
        path: path.join(__dirname, '../assets'),
        filename: '[name].js',
        publicPath: './assets'
    },
    resolve: {
        alias: {
            images: path.resolve(__dirname, '../client/assets/images'),
            components: path.resolve(__dirname, '../client/components'),
            views: path.resolve(__dirname, '../client/views'),
            styles: path.resolve(__dirname, '../client/styles')
        },
        extensions: ['.js', '.vue', '.css', '.json'],
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                cssModules: {
                    localIdentName: '[md5:hash:hex:3]',
                    camelCase: true
                }
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets:['es2015', 'stage-1']
            },
            exclude: [/node_modules/]
        }, {
            test  : /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: 'img/[hash:7].[ext]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            use: 'url-loader'
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
        }]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                babel: {
                    babelrc: false,
                    presets: [
                        ['es2015', {modules: false}], 'stage-1'
                    ]
                },
                postcss,
                vue: {
                    postcss,
                    loaders: {
                        sass: "vue-style-loader!css-loader?sourceMap!sass-loader?indentedSyntax"
                    }
                }
            }
        }),
        new HtmlWebpackPlugin({
            title   : 'Tocas UI',
            template: __dirname + '/index.html',
            filename: '../index.html'
        }),
        new HtmlWebpackPlugin({
            title   : 'Tocas UI',
            template: __dirname + '/index.html',
            filename: '../404.html'
        }),
        new HtmlWebpackPlugin({
            title   : 'Tocas UI',
            template: __dirname + '/index.html',
            filename: '../200.html'
        }),
        new ExtractTextPlugin("[name].css")
    ]
}