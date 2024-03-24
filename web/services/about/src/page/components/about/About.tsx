import React, {useState} from 'react';
import "./About.module.scss";
import CardChat from "@packages/shared/UI_KIT/Cards/Chat/CardChat"
import CardEvent from "@packages/shared/UI_KIT/Cards/Event/CardEvent"
import CustomEventModal from '@packages/shared/UI_KIT/Button/Button';
import CardUser from '@packages/shared/UI_KIT/Cards/User/CardUser';
import MyCarousel from '@packages/shared/UI_KIT/Carousel/Carousel';
import ErrorCard from '@packages/shared/UI_KIT/ErrorCard/ErrorCard';
//для примера
import {ExempleUtils} from "@packages/shared/utils/ExempleUtils";
import ExempleComponent from "@packages/shared/UI_KIT/ExempleComponent";

//пример загрузки статики
import foto1JPG from "../../../assets/1.jpg";
import foto2PNG from "../../../assets/2.png";
import Foto3SVG from "../../../assets/3.svg";
import { Modal } from 'react-bootstrap';


const About = () => {
    ExempleUtils();
    const [count,setCount] = useState<number>(0);

    const increment = () => setCount(prevState => prevState + 1);
    const decrement = () => setCount(prevState => prevState - 1);

    return (
        <div>
            <h1>Минифронт о нас</h1>
            <h1>Платформа на текущий момент (задана env):{__PLATFORM__}</h1>

            <h1>Hello world: {count}</h1>
            <button onClick={increment}>+ <span>Increment</span></button>
            <button onClick={decrement}>- <span>Decrement</span></button>

            <div>
                <img width={100} height={100} src={foto1JPG} alt={foto1JPG}/>
                <img width={100} height={100} src={foto2PNG} alt={foto2PNG}/>
                <Foto3SVG width={200} height={200}/>
            </div>
            <h1>Платформа на текущий момент для HOST (задана env):{__PLATFORM__} , {__DEV__}</h1>
            <ExempleComponent />
            <CardEvent></CardEvent>
            <CardChat></CardChat>
            <CustomEventModal show={undefined} handleClose={undefined}></CustomEventModal>
            <CardUser name={''} phoneNumber={''} email={''}></CardUser>
            <MyCarousel></MyCarousel>
            <ErrorCard></ErrorCard>
            <Modal></Modal>
        </div>
    );
};

export default About;