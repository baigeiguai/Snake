const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin}= require('clean-webpack-plugin');
module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.ts','.js'],
    },
    devServer: {
        static:'./dist',
        port: 8882
    }
};