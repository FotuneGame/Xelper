import React from 'react';
import {TransformWrapper, TransformComponent, useControls} from "react-zoom-pan-pinch";
import {FaSearchMinus, FaSearchPlus, FaTimes,FaHistory} from "react-icons/fa";

interface IProps {
    setModalVisible: (value:boolean)=> void,
    children: string | React.ReactNode,
}

const Wrapper: React.FC<IProps> = ({children,setModalVisible}) => {

    const Controls = () => {
        const { zoomIn, zoomOut,resetTransform} = useControls();
        return (
            <div className="position-absolute top-0 end-0 z-3">
                <div className=" d-flex justify-content-center">
                    <button className="btn bg-transparent px-2 mx-0" onClick={() => zoomIn()}><FaSearchPlus size="1.5rem" color="white"/></button>
                    <button className="btn bg-transparent px-2 mx-0" onClick={() => zoomOut()}><FaSearchMinus size="1.5rem" color="white"/></button>
                    <button className="btn bg-transparent px-2 mx-0" onClick={() => resetTransform()}><FaHistory size="1.5rem" color="white"/></button>
                    <button className="btn bg-transparent px-2 mx-0" onClick={()=>setModalVisible(false)}>
                        <FaTimes  size="2rem" color="white"/>
                    </button>
                </div>
            </div>
        );
    };

    return (
        <TransformWrapper initialScale={1}>
            <Controls/>
            <TransformComponent
                wrapperStyle={{width: "100%", height: "100%",}}
                contentStyle={{ width: "100%", height: "100%" }}
            >
                {children}
            </TransformComponent>
        </TransformWrapper>
    );
};

export default Wrapper;