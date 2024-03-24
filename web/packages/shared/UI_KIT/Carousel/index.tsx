import {React,useState} from 'react';
import style from "./Carousel.module.scss";
import {Carousel as Carousel} from "react-bootstrap"
import Wrapper from "./wrapper/";
import Modal from "../Modal";
import Video from "../Video";
import {FaTimes} from "react-icons/fa";

interface IProps {
    imgs:Array<string>,
    video:Array<string>,
    poster:Array<string>,
}

const CarouselUI: React.FC<IProps> = ({imgs,video,poster}) => {
    const [modalVisible,setModalVisible]=useState<boolean>(false);

    return (
        <Modal show={modalVisible} onHide={() => setModalVisible(!modalVisible)} type={"media"}>
            <Carousel interval={null} className={modalVisible ? style.wrapper_full : style.wrapper}  indicators={false}>
                {imgs
                    ? imgs.map((path,index) =>
                        <Carousel.Item key={path+index}>
                            {modalVisible ?
                                <Wrapper setModalVisible={setModalVisible}><img className={style.item_full} src={path} /></Wrapper>
                                :
                                <img className={style.item} src={path} onClick={() => setModalVisible(true)}/>
                            }
                        </Carousel.Item>)
                    :null}
                {video
                    ? video.map((path,index) =>
                        <Carousel.Item key={path+index}>
                            <div className={"d-flex justify-content-center"}>
                                <div className={"w-75 align-self-center"}>
                                    <Video className={"w-100"} video={path} poster={index < poster.length ? poster[index] : undefined} />
                                </div>
                            </div>
                        </Carousel.Item>)
                    :null}
            </Carousel>
        </Modal>
    );
};

export default CarouselUI;