import axios  from "axios";
const MAIN_URL= "https://api.themoviedb.org/3"
const TOKEN = import.meta.env.VITE_APP_api_token
const headers = {
    Authorization : "Bearer " + TOKEN,
}

export const FetchDataFromApi = async(url, params)=>{
    try{
        const {data} = await axios.get(MAIN_URL+url,{headers,params});
        return {data};
    }
    catch(err){
        console.log(err);
        return err;
    }
}