
const path = require('path')

const {merge} = require('webpack-merge')
const webpackDev = require('./webpack.dev')
const webpackProd = require('./webpack.prod')

const htmlWebpackPlugin = require('html-webpack-plugin')

let mergeConfig;

if(process.env.NODE_ENV === 'development') {
    mergeConfig = webpackDev;
} else if(process.env.NODE_ENV === 'production'){
    mergeConfig = webpackProd;
}

/** @type {import('webpack').Configuration} */
module.exports = merge({
    entry: {
        bundle: path.resolve(__dirname, '../src/index.tsx')
    },
    output: {
        filename: '[name].[contenthash:8].js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'esbuild-loader',
                options: {
                    loader: 'tsx',
                    target: 'es2015'
                },
            },
            {
                test: /\.less$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'esbuild-loader',
                        options: {
                            loader: 'css',
                            minify: true,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                          postcssOptions: {
                            plugins: [
                              [
                                'postcss-preset-env',
                                {
                                  // 其他选项
                                },
                              ],
                            ],
                            // postcssOptions: {
                            //     parser: 'postcss-js',
                            // },
                            // execute: true,
                          },
                        },
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                include: path.resolve(__dirname, '../src'),
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src')
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
}, mergeConfig)