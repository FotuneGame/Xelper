import React, {useEffect, useState} from 'react';

interface IProps {
    methodLoad: (page:number) => Promise<any>,
}

const Pagination: React.FC<IProps> = ({methodLoad}) => {

    const [array,setArray] = useState<Array<string | React.ReactNode>>([]);
    const [currentPage,setCurrentPage] = useState<number>(0);
    const [fetching,setFetching] = useState<boolean>(false);
    const [totalCount,setTotalCount] = useState<number>(1);

    const loadPost= (e)=>{
        if(e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop - window.innerWidth < 400 && array.length < totalCount){
            setFetching(true);
        }
    }

    useEffect(  ()=>{
        if(fetching){
            const asyncSend = async () =>{
                return  await methodLoad(currentPage+1);
            }
            asyncSend().then((res)=>{
                if(res && res.data && res.headers){
                    setArray([...array,...res.data]);
                    setCurrentPage(currentPage+1);
                    setFetching(false);
                    setTotalCount(res.headers["x-total-count"])
                }
            }).catch((err)=>console.log(err.message));
        }
    },[fetching]);

    useEffect(()=>{
        document.addEventListener("scroll",loadPost);
        return ()=>{
            document.removeEventListener("scroll",loadPost);
        }
    },[]);

    return (
        <div>
            {array.map((obj,index)=>{
                return <div key={"pag_"+index+"_currentPage"+currentPage}>{obj}</div>
            })}
        </div>
    );
};

export default Pagination;