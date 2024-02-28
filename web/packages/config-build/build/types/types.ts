export  interface BuildPaths{
    entry:string,
    html:string,
    output:string,
    src:string,
    icon:string,
    locales:string,
    locales_output:string,
}
export interface BuildOptions{
    port: number,
    paths:BuildPaths,
    mode:BuildMode,
    analyzer?:boolean,
    platform?:BuildPlatform,
    remotes?:BuildRemotes,
    open_web?:boolean,
}

export type BuildMode = 'production' | 'development';
export type BuildPlatform = 'mobile' | 'desktop';
export type BuildRemotes = {
    about?:string,
    event?:string,
    messenger?:string,
    shorts?:string,
    user?:string
}
