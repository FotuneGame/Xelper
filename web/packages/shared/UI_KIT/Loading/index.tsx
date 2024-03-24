import React from 'react';
import style from "./Loading.module.scss";
import Spinner from 'react-bootstrap/Spinner';

interface IProps{
    fullscreen:boolean,
}

const Loading: React.FC<IProps> = ({fullscreen}) => {

    const Body = () => {
        return(
            <div className={"d-flex align-items-center"}>
                <Spinner className={"m-2"} animation="grow" variant="secondary" size="sm"/>
                <Spinner className={"m-2"} animation="grow" variant="secondary"/>
                <Spinner className={"m-2"} animation="grow" variant="secondary" size="sm"/>
            </div>
        );
    }


    if(fullscreen) {
        return (
            <div className={["d-flex justify-content-center align-items-center", style.fullscreen].join(" ")}>
                <Body/>
            </div>
        );
    }else{
        return (
            <div className={"w-100 d-flex justify-content-center align-items-center"}>
                <Body/>
            </div>
        );
    }
};

export default Loading;