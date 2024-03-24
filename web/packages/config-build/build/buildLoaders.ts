import {ModuleOptions} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import {buildBabelLoader} from "./babel/buildBabelLoader";

export function buildLoaders(options:BuildOptions):ModuleOptions['rules']{
    const  isDev =options.mode ==='development';

    const AssetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const SvgrLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                }
            }
        ],
    }

    const CssLoaderModules = {
        loader: "css-loader",
        options: {
            // настройка для .module.scss/css хеширование селектора при релизе и при разработке вывод путя
            modules: {
                localIdentName: isDev ? '[path].[name]__[local]' : '[name].[hash:base64:8]',
            }
        },
    }

    const CssAndScssLoader ={
            test: /\.(s[ac]ss|css)$/i,
            use: [
                // Creates `style` nodes from JS strings
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJSS
                CssLoaderModules,
                // Compiles Sass to CSS
                "sass-loader",
            ],
        };
    const TypeScriptLoader = {
            test: /\.tsx?$/,
            use:[
                {
                    loader:'ts-loader',
                    options:{
                        transpileOnly: true, // отмена проверки типов в ts => ускоряет билд => вынесем проверку в плагин fork-ts-checker-config-build-plugin
                    },
                }
            ],
            exclude: /node_modules/,
        };
    const MP4Loader={
        test: /\.mp4$/,
        use: 'file-loader?name=videos/[name].[ext]',
    }

    //const BabelJSLoader = buildBabelLoader(options);

    // важен порядок с низу в вверх
    return[
        AssetLoader,
        CssAndScssLoader,
        TypeScriptLoader,
        //BabelJSLoader,
        SvgrLoader,
        MP4Loader,
    ]

}