const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index.js',
    mode: 'development',

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
                    minChunks: 1
                }
            }
        }
    },

    watch: false
};