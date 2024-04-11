import React, {useEffect, useRef, useState,useCallback} from 'react';
import style from "./Dropdown.module.scss";
import Item from "./Item";
import {Button} from "react-bootstrap";


interface IProps{
    label:string,
    names:Array<string>,
    setValueCallback:(value:string)=>void,
}

const DropdownUI:React.FC<IProps> = React.memo(({label,names,setValueCallback}) => {
    if(!names) return ;

    const [value,setValue]=useState<string>(label);
    const [active,setActive] = useState<boolean>(false);

    const choise = useCallback((value_new:string)=>{
        setValue(value_new);
        setActive(false);
        setValueCallback(value_new);
    },[]);

    const buttonRef=useRef(null);
    const listRef=useRef(null);
    const handleClick = (event) =>{
        if(buttonRef.current && !buttonRef.current.contains(event.target) || listRef.current && !listRef.current.contains(event.target))
            setActive(false);
    }
    useEffect(()=>{
        document.addEventListener("mousedown",handleClick)
        return () => {
            window.removeEventListener('mousedown', handleClick);
        };
    },[]);

    return (
        <div ref={buttonRef}>
            <Button ref={buttonRef} className={style.default} onClick={()=>setActive(!active)}>{value}</Button>
            {active &&
                    <div className={style.list}>
                        {names.map((text, index) => {
                            return <Item key={"dropdown_" + text + "_" + index} callback={choise} text={text} active={text===value}/>
                        })}
                    </div>
            }
        </div>
    );
});

export default DropdownUI;