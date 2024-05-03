import React, {useState,useEffect} from 'react';
import "./Code.module.scss";
import Promo from "../../../components/Promo";
import {Container, Row} from "react-bootstrap";
import AlertUI from "@packages/shared/UI_KIT/Alert";
import {NavLink, useNavigate} from "react-router-dom";
import {Routes} from "@packages/shared/routes";
import ButtonUI from "@packages/shared/UI_KIT/Button";
import UserAPI from "@packages/shared/API/UserAPI";

import Img1 from "../../../assets/1.jpg";
import Img2 from "../../../assets/2.png";

interface IProps{
    timeWait:number
}

const Code: React.FC<IProps> = ({timeWait=30}) => {
    const [error,setError] = useState(false);
    const nav = useNavigate();

    const exit =  ()=>{
        nav(Routes.eventRoutes.main);
    }

    const submit = async ()=>{

        const state = JSON.parse(localStorage.getItem("form_reg"));
        if(!state) return setError(true);
        if(!state.password || !state.email || !state.phone || !state.surname || !state.place) return setError(true);

        const res = await UserAPI.registration(state.password,state.email,state.phone,state.surname,state.place);
        if(!res)return setError(true);

        setError(false);
        return res;
    }

    const [time,setTime] = useState<number>(timeWait);
    const Again = async ()=>{
        if(time<=0){
            const res = await submit();
            if(res) {
                setTime(timeWait);
            }else
                setError(true);

        }
    }
    useEffect(()=>{
        if(time>0)
            setTimeout(()=>setTime(time-1),1000);
    },[time]);

    return (
        <div>
            <Promo label={"Код подтверждения"} text={"Кажется к вам пришло письмо на почту..."} img={[Img1,Img2]} type={1}/>
            <Container className={"w-100 shadow rounded p-3 mb-3"}>
                <Row className={"w-100 rounded p-3 mb-3"}>
                    {error && <AlertUI type={"danger"} label={"Не удалось отправить ссылку снова..."}/>}
                    <h4>Вам на почту была отправленна ссылка для подтверждения аккаунта... нажмите пж на неё</h4>
                    <div className={"d-grid justify-content-center d-md-flex justify-content-md-between mt-3"}>
                        <div className={"d-grid justify-content-center d-md-flex"}>
                            {time<=0 ?
                                <NavLink className= "nav-link mx-auto mx-lg-2 my-lg-auto my-2 text-center" onClick={Again}>Отправить код повторно</NavLink>
                                :
                                <NavLink className="nav-link mx-auto mx-lg-2 my-lg-auto my-2 text-center text-black" >Время для повтороной отправки: {time} сек.</NavLink>
                            }
                        </div>
                        <ButtonUI type={"agree"} callback={exit}>Вернуться</ButtonUI>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Code;