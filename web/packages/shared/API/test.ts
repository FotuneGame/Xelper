import axios from "axios";

const APIGetTestPost= async(limit:number,page:number)=>{
    return await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`)
        .then( responce =>{
            return responce
        })
        .catch( err =>{
            console.error(err.message);
            return null;
        })
}

export default APIGetTestPost;