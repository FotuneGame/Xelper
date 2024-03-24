import React from 'react';
import "./Video.module.scss";

interface IProps{
    video:string,
    poster:string | undefined,
    width:number,
    height:number,
    className:string,
}

const Index: React.FC<IProps> = ({video,poster,width,height,className}) => {
    return (
        <video className={className} width={width} height={height} controls poster={poster}>
            <source src={video} type="video/mp4"/>
        </video>
    );
};

export default Index;