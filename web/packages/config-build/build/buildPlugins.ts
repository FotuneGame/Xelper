import webpack, {Configuration, DefinePlugin} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ForkTsCheckerWebpackPlugin from  "fork-ts-checker-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

import {BundleAnalyzerPlugin} from  "webpack-bundle-analyzer"
import {BuildOptions} from "./types/types";


export function buildPlugins(options:BuildOptions):Configuration['plugins']{
    const  isDev =options.mode ==='development';
    const {mode,paths,analyzer,platform} = options;

    const plugins:Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template:paths.html,
            favicon:paths.icon,
            publicPath:'/',
        }),
        new DefinePlugin({
           __PLATFORM__: JSON.stringify(platform),
            __DEV__:JSON.stringify(mode)
        }),
        new CopyPlugin({
            patterns: [
                { from: paths.locales, to: paths.locales_output },
            ],
        }),
    ]

    if(isDev){
        plugins.push(new webpack.ProgressPlugin());
        //plugins.push(new ForkTsCheckerWebpackPlugin()); // плагин проверки ts ошибок ()
    }else{
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }));
    }

    if(analyzer)
        plugins.push(new BundleAnalyzerPlugin());


    return plugins;
}