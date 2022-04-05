'use strict'

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const merge = require('webpack-merge')
const config = require('./webpack.base')
const pkg = require('../package')

config.output.publicPath = 'https://v2.tocas-ui.com/assets/'

module.exports = merge(config, {
    output: {
        filename: '[name].[chunkhash:8].js'
    },
    plugins: [
        new ProgressBarPlugin(),
        new ExtractTextPlugin('styles.[contenthash:8].css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        //new webpack.optimize.UglifyJsPlugin({
        //    compress:{
        //        warnings: false
        //    },
        //    sourceMap: false,
        //    comments : false
        //}),

        // extract vendor chunks
        new webpack.optimize.CommonsChunkPlugin({
            name    : 'vendor',
            filename: 'vendor.[chunkhash:8].js'
        }),

        new webpack.LoaderOptionsPlugin({
            vue: {
                loaders: {
                    css: ExtractTextPlugin.extract({
                        use     : 'css-loader',
                        fallback: 'vue-style-loader'
                    }),
                    scss: "vue-style-loader!css-loader!sass-loader?indentedSyntax",
                    sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax"
                }
            }
        })
    ]
})