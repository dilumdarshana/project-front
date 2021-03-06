const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        port: process.env.port || 5001,
    },
});
