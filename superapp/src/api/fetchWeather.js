import axios from "axios";

const BASE_URL = "https://api.weatherapi.com/v1";
const API_KEY = import.meta.env.VITE_API_WEATHER;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

const fetchWeather = async (city = "London") => {
    const CACHE_KEY = `weather_${city}`;
    const {responseData, timeStamp} = JSON.parse(localStorage.getItem(CACHE_KEY));

    // Check if we have cached data and if it's still valid
    if (responseData && Date.now() - timeStamp < CACHE_DURATION) {
        console.log("Fetching from cache...");
        return responseData; // Return the cached data
    }

    try {
        const response = await axios.get(`${BASE_URL}/current.json`, {
            params: {
                key: API_KEY,
                q: city,
            },
        });

        // Store the new response in localStorage with a timestamp
        const responseData = response.data;
        localStorage.setItem(CACHE_KEY, JSON.stringify({
            responseData,
            timeStamp: Date.now(),
        }));

        console.log("Fetching from API...");
        return responseData; // Return the API data
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to handle it elsewhere if needed
    }



    // return axios.get(`${BASE_URL}/current.json`,
    //     {params:{
    //         key:API_KEY,
    //         q:city
    //     }}
    // ).then(
    //     (response)=>{
    //         localStorage.setItem(CACHE_KEY,JSON.stringify({
    //             responseData:response.data,
    //             timeStamp:Date.now(),
    //         }))
    //         console.log("Fetching from API...");
            
    //     }
    // ).catch(
    //     (err)=>{
    //         console.error(err);
    //         throw err;
    //     }
    // )
}

export default fetchWeather;