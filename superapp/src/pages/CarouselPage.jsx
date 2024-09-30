import NewsWidget from "../components/NewsWidget.jsx";
import WeatherWidget from "../components/WeatherWidget.jsx";
import ProfileWidget from "../components/ProfileWidget.jsx";
import styles from "./CarouselPage.module.css";

const CarouselPage = () => {


return(
    <div className={styles.container}>
        <div className={styles.profileWidget}><ProfileWidget/></div>
        <div className={styles.weatherWidget}><WeatherWidget/></div>
        <div className={styles.newsWidget}> <NewsWidget/></div>
       
    </div>
);
}

export default CarouselPage;