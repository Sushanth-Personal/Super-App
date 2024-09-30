
import styles from "./WeatherWidget.module.css";
import formatDateAndTime from "../utils/formatDateAndTime";
import { useEffect } from "react";
import fetchWeather from "../api/fetchWeather";
import { useState } from "react";
const WeatherWidget = () => {
const [weather, setWeather] = useState({
  condition:"",
  temp:0,
  pressure:0,
  wind:0,
  humidity:0,
});

useEffect(
  ()=>{
    fetchWeather().then((data)=>{
      console.log(data);
      
    });
    fetchWeather().then((data)=>{
      setWeather({
        ...weather,
        condition:data.current.condition.text,
        temp: data.current.temp_c,
        pressure: data.current.pressure_in,
        wind:data.current.wind_kph,
        humidity: data.current.humidity,
      })
    })
  },
[]);

const {date,time}=formatDateAndTime();
  
  return (

    <div className = {styles.container}>
      <div className={styles.header}>
          {date && <div>{date}</div>}
          {time && <div>{time}</div>}
      </div>
      <div className = {styles.body}>
        <div>{weather.condition}</div>
        <div>{weather.temp}°C</div>
        <div>{weather.pressure}</div>
        <div>{weather.wind_kph}</div>
        <div>{weather.humidity}</div>
      </div>
    </div>
  )
}

export default WeatherWidget;