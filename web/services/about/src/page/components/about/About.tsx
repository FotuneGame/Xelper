import React, {useState} from 'react';
import "./About.module.scss";

//Импорты всех UI_KIT
import ButtonUI from "@packages/shared/UI_KIT/Button";
import CardChat from "@packages/shared/UI_KIT/Cards/Chat"
import CardEvent from "@packages/shared/UI_KIT/Cards/Event"
import CardUser from '@packages/shared/UI_KIT/Cards/User';
import CarouselUI from '@packages/shared/UI_KIT/Carousel';
import ErrorCard from '@packages/shared/UI_KIT/ErrorCard';
import InputUI from '@packages/shared/UI_KIT/Input';
import ListUI from '@packages/shared/UI_KIT/List';
import Loading from '@packages/shared/UI_KIT/Loading';
import ModalUI from '@packages/shared/UI_KIT/Modal';
import SearchInput from '@packages/shared/UI_KIT/SearchInput';
import Video from '@packages/shared/UI_KIT/Video';




//для примера
import {ExempleUtils} from "@packages/shared/utils/ExempleUtils";
//пример загрузки статики
import foto1JPG from "../../../assets/1.jpg";
import foto2PNG from "../../../assets/2.png";
import Foto3SVG from "../../../assets/3.svg";
import MP4 from "../../../assets/video/test.mp4"



const About = () => {
    ExempleUtils();

    //Функции для теста кнопок
    const [count,setCount] = useState<number>(0);
    const increment = () => setCount(prevState => prevState + 1);
    const decrement = () => setCount(prevState => prevState - 1);

    // функция для Input - ов
    const [inputValue,setInputValue] = useState<string>("");
    const changeName = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setInputValue(event.target.value)};
    const getFile = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {console.log(event.target.files)};

    //Для модального окна без media
    const [modal,setModal] = useState<boolean>(false);

    return (
        <div>
            <h1>Минифронт о нас</h1>
            <h1>Платформа на текущий момент (задана env):{__PLATFORM__} , {__DEV__}</h1>

            <hr/>
            {//<!-- Примеры кнопок-->
            }
            <h1>Hello world: {count}</h1>
            <ButtonUI variant={"primary"} callback={increment}>Инкремент</ButtonUI>
            <ButtonUI variant={"outline-primary"} callback={decrement}>Декримент</ButtonUI>

            <hr/>
            {//<!-- Примеры полей ввода-->
            }
            <div className={"w-50"}>
                <InputUI callback={changeName} label={"Простое поле для ввода"} placeholder={"пиши текст"} type={"text"} value={inputValue} rows={0}/>
                <InputUI callback={changeName} label={"Простое поле для ввода большого текста"} placeholder={"пиши текст"} type={"text"} value={inputValue} rows={3}/>
                <InputUI callback={getFile} label={"Простое поле для ФАЛЙЛОВ"} placeholder={"пиши текст"} type={"file"}  rows={0}/>
            </div>
            <hr/>
            {//<!-- Пример списка с нумерацией-->
            }
            <ListUI className={"w-50"} Numerate={true} list={
                ["1","2",<h5>И ТАКИЕ ЭЛЕМЕНТЫ ТОЖЕ МОГУТ БЫТЬ В СПИСКЕ</h5>]
            }/>

            <hr/>
            {//<!-- Пример списка без нумерации-->
            }
            <ListUI className={"w-50"} Numerate={false} list={
                ["1","2",<h5>СПИСОК БЕЗ НУМЕРАЦИИ</h5>]
            }/>

            <hr/>

            {//<!-- Пример слайдера с фотографиями-->
            }
            <div className={"d-flex justify-content-center"}>
                <CarouselUI imgs={[foto1JPG,foto2PNG]} controls={true}/>
            </div>

            <hr/>

            {//<!-- Пример модального окна-->
            }
            <div className={"d-flex justify-content-center"}>
                <ButtonUI variant={"danger"} callback={()=>setModal(!modal)}>Модальное окно</ButtonUI>
                <ModalUI show={modal} onHide={()=>setModal(!modal)} title={"Заголовок модального окна"} type={"not_media"}>
                    <h1>Hello modal!!!</h1>
                    <div>
                        <img width={100} height={100} src={foto1JPG} alt={foto1JPG}/>
                        <img width={100} height={100} src={foto2PNG} alt={foto2PNG}/>
                        <Foto3SVG width={200} height={200}/>
                    </div>
                </ModalUI>
            </div>

            <hr/>

            {//<!-- Пример картоки с ошибкой-->
            }
            <ErrorCard />

            <hr/>

            {//<!-- Пример загрузки-->
            }
            <Loading fullscreen={false}/>

            <hr/>
            {//<!-- Пример видео-->
            }
            <div className={"d-flex justify-content-center"}>
                <Video video={MP4} poster={foto1JPG} width={750} height={500}/>
            </div>

            <hr/>
            {//<!-- Пример слайдера с видео-->
            }
            <div className={"d-flex justify-content-center"}>
                <CarouselUI video={[MP4,MP4]} poster={[foto1JPG]} controls={true}/>
            </div>



            <hr/>
            {//<!-- Пример слайдера универсального (Лучше два слайдера с фото и видео отдельно!!!)-->
            }
            <div className={"d-flex justify-content-center"}>
                <CarouselUI imgs={[foto1JPG,foto2PNG]} video={[MP4,MP4]} poster={[foto1JPG]} controls={true}/>
            </div>


        </div>
    );
};

export default About;