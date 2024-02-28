import path from "path";
import webpack from 'webpack';
import {buildWebpack} from "@packages/config-build";
import {BuildMode, BuildPlatform} from "@packages/config-build";
import ModuleFederation from "./configs/ModuleFederationConfig/ModuleFederationPlugin";


interface  EnvVariables {
    analyzer:boolean,
    mode:BuildMode,
    port: number,
    platform:BuildPlatform,
    open_web: boolean,
}

export default (env: EnvVariables) => {

    const config: webpack.Configuration = buildWebpack({
        mode: env.mode ?? "development",
        port: env.port ?? 3003,
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
        open_web: env.open_web  ?? true,
    });

    config.plugins.push(ModuleFederation);

    return config;
}
