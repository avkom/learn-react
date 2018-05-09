const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    mode: 'development',
    devtool: 'eval',

    entry: './index.jsx',

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ["transform-react-jsx"],
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'all',
                    minSize: 0,
                    minChunks: 1,
                    priority: 2
                },
                common: {
                    name: 'common',
                    chunks: 'all',
                    minSize: 0,
                    minChunks: 2,
                    priority: 1
                }
            }
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'netflixroulette',
            hash: true,
            template: './index.html'
        }),

        new ExtractTextPlugin('[name].css'),

        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        hot: true
    }
};