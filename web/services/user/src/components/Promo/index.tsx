import React from 'react';
import style from "./Promo.module.scss";
import {Container} from "react-bootstrap";

interface IProps{
    label:string,
    text:string,
    img:Array<string | React.ReactNode>,
    type:number
}


const Promo: React.FC<IProps> = ({label,text,img,type}) => {
    switch (type){
        case 1:
            return (
                <div className={["w-100 shadow d-flex",style.all].join(" ")}>
                    <Container className={"w-100 mb-3 d-md-flex position-relative align-self-center"}>
                        <div className={["col-12 col-md-6 position-relative",style.back_img].join(" ")}>
                            {img && img[0] && <img className={style.place_3} src={img[0]} alt={img[0]}/>}
                            {img && img[1] && <img className={style.place_4} src={img[1]} alt={img[1]}/>}
                        </div>
                        <div className={["col-12 col-md-6",style.text_zone].join(" ")}>
                            <h1>{label}</h1>
                            <h4>{text}</h4>
                        </div>
                    </Container>
                </div>
            );
        default:
            return (
                <div className={["w-100 shadow d-flex",style.all].join(" ")}>
                    <Container className={"w-100 mb-3 d-md-flex position-relative align-self-center"}>
                        <div className={["col-12 col-md-6",style.text_zone].join(" ")}>
                            <h1>{label}</h1>
                            <h4>{text}</h4>
                        </div>
                        <div className={["col-12 col-md-6 position-relative",style.back_img].join(" ")}>
                            {img && img[0] && <img className={style.place_1} src={img[0]} alt={img[0]}/>}
                            {img && img[1] && <img className={style.place_2} src={img[1]} alt={img[1]}/>}
                        </div>
                    </Container>
                </div>
            );
    }
};

export default Promo;