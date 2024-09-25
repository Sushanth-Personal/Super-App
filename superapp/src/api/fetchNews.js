import axios from "axios"

const BASE_URL = "https://newsapi.org/v2";
const API_KEY = import.meta.env.VITE_NEW_API;


const fetchNews = () => {
    return axios.get( BASE_URL, {
        params: {
            apiKey:API_KEY,
            sources:"techcrunch"
        }
    }
).then((Response)=>{
    return Response;
}).catch((err)=>{
    console.error(err);
    throw err;
})
}