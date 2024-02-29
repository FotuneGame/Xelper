import path from "path";
import webpack from 'webpack';
import {buildWebpack} from "@packages/config-build";
import {BuildMode, BuildPlatform,BuildRemotes} from "@packages/config-build";
import packageJson from "./package.json";


interface  EnvVariables {
    analyzer:boolean,
    mode:BuildMode,
    port: number,
    platform:BuildPlatform,
    remotes:BuildRemotes,
}

export default (env: EnvVariables) => {

    const  remotesEnv =  env.remotes ?? {
            about:"http://localhost:3001",
            event:"http://localhost:3002",
            messenger:"http://localhost:3003",
            shorts:"http://localhost:3004",
            user:"http://localhost:3005",
        };

    const config: webpack.Configuration = buildWebpack({
        mode: env.mode ?? "development",
        port: env.port ?? 3000,
        paths:{
            entry: path.resolve(__dirname,'src','index.tsx'),
            output:path.resolve(__dirname, 'build'),
            html:path.resolve(__dirname,'public','index.html'),
            src:path.resolve(__dirname,'src'),
            icon:path.resolve(__dirname,'public','icon','capybara.ico'),
            locales:path.resolve(__dirname,'public','locales'),
            locales_output:path.resolve(__dirname, 'build','locales'),
        },
        analyzer: env.analyzer ?? false,
        platform: env.platform ?? "desktop",
        remotes: remotesEnv,

    });


    config.plugins.push(
        new webpack.container.ModuleFederationPlugin({
            name:"host",
            filename:'remoteEntry.js',
            remotes:{
                about: `about@${remotesEnv.about}/remoteEntry.js`,
                event:`event@${remotesEnv.event}/remoteEntry.js`,
                messenger:`messenger@${remotesEnv.messenger}/remoteEntry.js`,
                shorts:`shorts@${remotesEnv.shorts}/remoteEntry.js`,
                user:`user@${remotesEnv.user}/remoteEntry.js`,
            },
            shared:{
                ...packageJson.dependencies,
                react:{
                    eager: true,
                    requiredVersion:packageJson.dependencies['react'],
                },
                "react-router-dom":{
                    eager: true,
                    requiredVersion:packageJson.dependencies['react-router-dom'],
                },
                "react-dom":{
                    eager: true,
                    requiredVersion:packageJson.dependencies['react-dom'],
                },
            }
        })
    )

    return config;
}
