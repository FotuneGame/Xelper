import React, {useEffect, useState} from 'react';
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";
import style from "./Carousel.module.scss";


interface IProps{
    label:string,
    array: Array<string | React.ReactNode>,
}

const CarouselDefaultUI: React.FC<IProps> = ({label, array}) => {
    if(!array) return ;


    const getWindowWidth = () => {
        return window.innerWidth;
    }

    const MoveLeft = () => {
        if(leftValue>=0) return;
        setLeftValue(leftValue+stepPercent);
    }

    const MoveRight = () => {
        if(leftValue<=-limitPercent) return;
        setLeftValue(leftValue-stepPercent);
    }

    const [windowWidth, setWindowWidth] = useState<number>(getWindowWidth());
    const [stepPercent, setStepPercent] = useState<number>(50);
    const [limitPercent,setLimitPercent] = useState<number>(stepPercent * (array.length-1));
    const [leftValue,setLeftValue] = useState<number>(0);
    const [styleMove,setStyleMove] = useState<React.CSSProperties>({
        position:'relative',
        left: "0%",
        transition: "all 1s"
    });

    useEffect(()=>{
        // корректируем шаг в зависимости от col-12 col-md-6 col-lg-4
        if(windowWidth > 992) setStepPercent(33.33);
        else if(windowWidth > 768) setStepPercent(50);
        else setStepPercent(100);
        setLimitPercent((stepPercent) * (array.length-1));
        if(leftValue<=-limitPercent) setLeftValue(-limitPercent);
        if(leftValue>=0) setLeftValue(0);

        setStyleMove({
            position:'relative',
            left: leftValue+"%",
            transition: "all 1s",
        });

        const handleWindowResize = () => {
            setWindowWidth(getWindowWidth());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    },[windowWidth,stepPercent,leftValue]);

    return (
        <div className={style.carousel}>
            <label className={style.label}>{label}</label>
            <div className={style.body}>
                <div className={style.components} style={styleMove}>
                    {array.map((obj,index)=>{
                        return <div key={"carouselDef_"+obj+"_"+index} className={ stepPercent===100 ?"col-12" : (stepPercent===50 ?"col-6" : "col-4")}>{obj}</div>
                    })}
                </div>
                <button className={style.btn_left} onClick={MoveLeft}><FaAngleLeft size="1.5rem"/></button>
                <button className={style.btn_right} onClick={MoveRight}><FaAngleRight size="1.5rem"/></button>
            </div>
        </div>
    );
};

export default CarouselDefaultUI;