import React from "react";

export interface IProps {
    placeholder: string,
    event: (value:string)=>void,
    searchSetting:boolean,
    setSearchSetting:(value:boolean)=>void,
    methodHelp:() => Promise<any>,
}