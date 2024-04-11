import React, {useEffect, useState, useRef} from 'react';
import {Form, InputGroup, Button} from "react-bootstrap";
import SearchSVG from "./SVG/search.svg";
import SearchUpSVG from "./SVG/search-up.svg";
import SearchDownSVG from "./SVG/search-down.svg";
import {IProps} from "./Types";
import style from "./Search.module.scss";
import ListUI from "../List";

const Search: React.FC<IProps> = ({placeholder,event,searchSetting,setSearchSetting,methodHelp}) => {
    const [helpArray,setHelpArray]=useState<Array<string|React.ReactNode>>(null);
    const [searchValue,setSearchValue] = useState<string>("");
    const [searchHelp,setSearchHelp]=useState<boolean>(false);
    const wrapOutsideClickRef=useRef(null);

    const getHelp = async () =>{
        const res = await methodHelp();
        res.data = res.data.map((text)=> <a onClick={()=>setSearchValue(text)}>{text}</a>);
        return res;
    }
    useEffect(()=>{
        if(searchValue==="") return setSearchHelp(false);
        if(methodHelp){
            const sendAwait = async ()=> {
                return await getHelp();
            }
            sendAwait()
                .then(res=>setHelpArray(res.data))
                .catch(err=>console.error(err.message));
        }
        if(!helpArray || helpArray && helpArray.length<=0) return setSearchHelp(false);
        setSearchHelp(true);
    },[searchValue]);


    const handleClick = (event) =>{
        if(wrapOutsideClickRef.current && !wrapOutsideClickRef.current.contains(event.target))
            setSearchHelp(false);
    }
    useEffect(()=>{
        document.addEventListener("mousedown",handleClick)
        return () => {
            window.removeEventListener('mousedown', handleClick);
        };
    },[]);

    return (
        <div ref={wrapOutsideClickRef}>
            <Form>
                <InputGroup>
                    <Form.Control
                        className={style.input}
                        type={"text"}
                        placeholder={placeholder}
                        onChange={(e)=>setSearchValue(e.target.value)}
                        value={searchValue}
                    />
                    {setSearchSetting ?
                        (searchSetting?
                                <Button className={style.button} onClick={() => {setSearchSetting(false);setSearchHelp(false);}}>
                                    <SearchUpSVG/>
                                </Button>
                            :
                                <Button className={style.button} onClick={() => {setSearchSetting(true);setSearchHelp(false);}}>
                                    <SearchDownSVG/>
                                </Button>
                        )
                        :
                        null
                    }
                    <Button className={style.button} onClick={()=>{event(searchValue);setSearchHelp(false);}}>
                        <SearchSVG />
                    </Button>
                </InputGroup>
            </Form>
            {searchHelp ?
                <div className={style.help_menu}>
                    <div className={style.list}>
                        <ListUI Numerate={false} list={helpArray}/>
                    </div>
                </div>
            :null}
        </div>
    );
};

export default Search;