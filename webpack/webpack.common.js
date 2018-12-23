const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './app/index.html',
    filename: './index.html',
});

const cssPlugin = new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[name].css',
});

const getConfigBasedOnEnv = () => {
    switch (process.env.NODE_ENV) {
        case 'dev': return path.join(__dirname, '/../app/config/dev.js');
        case 'prod': return path.join(__dirname, '/../app/config/prod.js');
        case 'qa': return path.join(__dirname, '/../app/config/qa.js');
        default: return path.join(__dirname, '/../app/config/dev.js');
    }
};
console.log('--------', getConfigBasedOnEnv())
module.exports = {
    entry: ['babel-polyfill', './app/'],
    output: {
        path: path.join(__dirname, '/../dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [htmlPlugin, cssPlugin],
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss'],
        alias: {
            appConfig: getConfigBasedOnEnv(),
        }
    },
};
