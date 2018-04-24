const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    mode: 'development',
    devtool: 'eval',

    entry: './index.jsx',

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
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
        })
    ],

    watch: false
};