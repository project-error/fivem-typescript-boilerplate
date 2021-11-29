const path = require('path')
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const buildPath = path.resolve(__dirname, 'dist');

const server = () => ({
    entry: './server/server.ts',
    output: {
        path: path.resolve(buildPath, 'server'),
        filename: '[contenthash].server.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimize: true
    },
    resolve: {
        extensions: ['.ts', '.js'],
    }
})

const client = () => ({
    entry: './client/client.ts',
    output: {
        path: path.resolve(buildPath, 'client'),
        filename: '[contenthash].client.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimize: true
    },
    resolve: {
        extensions: ['.ts', '.js'],
    }
})

module.exports = [server, client]