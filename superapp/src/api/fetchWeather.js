import axios from "axios"

const BASE_URL = "https://api.weatherapi.com/v1";
const API_KEY = import.meta.env.VITE_API_WEATHER;

const fetchWeather = (city="London") => {
    return axios.get(`${BASE_URL}/current.json`,
        {params:{
            key:API_KEY,
            q:city
        }}
    ).then(
        (response)=>{
            return response.data;
        }
    ).catch(
        (err)=>{
            console.error(err);
            throw err;
        }
    )
}