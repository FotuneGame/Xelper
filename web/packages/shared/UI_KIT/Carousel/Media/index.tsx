import {React,useState} from 'react';
import style from "./Carousel.module.scss";
import {Carousel} from "react-bootstrap"
import Wrapper from "./wrapper";
import Modal from "../../Modal";
import Video from "../../Video";

interface IProps {
    imgs:Array<string>,
    video:Array<string>,
    poster:Array<string>,
    controls:boolean,
}

const CarouselMediaUI: React.FC<IProps> = ({imgs,video,poster,controls}) => {
    const [modalVisible,setModalVisible]=useState<boolean>(false);

    return (
        <Modal show={modalVisible} onHide={() => setModalVisible(!modalVisible)} type={"preview"}>
            <Carousel interval={null} className={modalVisible ? style.wrapper_full : style.wrapper}  indicators={false} controls={controls}>
                {imgs
                    ? imgs.map((path,index) =>
                        <Carousel.Item key={path+index}>
                            {modalVisible ?
                                <Wrapper setModalVisible={setModalVisible} AllControls={true}>
                                    <img className={style.item_full} src={path} />
                                </Wrapper>
                                :
                                <img className={style.item} src={path} onClick={() => setModalVisible(true)}/>
                            }
                        </Carousel.Item>)
                    :null}
                {video
                    ? video.map((path,index) =>
                        <Carousel.Item key={path+index}>
                            <div className={"d-flex justify-content-center"}>
                                    {modalVisible ?
                                        <div className={"w-50 align-self-center"}>
                                            <Wrapper setModalVisible={setModalVisible} AllControls={false}>
                                                <Video className={style.item_full} video={path} poster={index < poster.length ? poster[index] : undefined} />
                                            </Wrapper>
                                        </div>
                                        :
                                        <div className={"w-75 align-self-center"}>
                                            <Video className={style.item} video={path} poster={index < poster.length ? poster[index] : undefined} />
                                        </div>
                                    }
                            </div>
                        </Carousel.Item>)
                    :null}
            </Carousel>
        </Modal>
    );
};

export default CarouselMediaUI;