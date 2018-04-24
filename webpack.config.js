const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    mode: 'development',
    devtool: 'none',

    entry: './index.js',

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    },

    resolve: {
        extensions: ['.js']
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

    watch: false
};