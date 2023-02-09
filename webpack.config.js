const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
//const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist/",
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            // SASS and CSS files from Vue Single File Components:
            {
                test: /\.vue\.(s?[ac]ss)$/,
                use: ['vue-style-loader', 'css-loader', 'sass-loader']
            },
            // SASS and CSS files (standalone):
            {
                test: /(?<!\.vue)\.(s?[ac]ss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/i,
                loader: "html-loader"
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        port: 8080,
        host: '0.0.0.0',
        static: {
            directory: path.join(__dirname, '/')
        },
    },
    watchOptions: {
        aggregateTimeout: 500, // delay before reloading
        poll: 1000 // enable polling since fsevents are not supported in docker
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
        // new CopyWebpackPlugin([
        // 	{ from: 'assets/fonts', to: 'fonts/'}
        // ])
    ]
};