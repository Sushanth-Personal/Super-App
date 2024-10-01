import ProfileWidget from "../components/ProfileWidget";
import NewsWidget from "../components/NewsWidget";
import NotesWidget from "../components/NotesWidget";
import TimerWidget from "../components/TimerWidget";
import WeatherWidget from "../components/WeatherWidget";
import styles from "./Dashboard.module.css";
const Dashboard = () => {
  return (
    
      <div className={styles.container}>
        <div className={styles.profileWidget}>
          <ProfileWidget />
        </div>
        <div className={styles.newsWidget}>
          <NewsWidget />
        </div>
        <div className={styles.notesWidget}>
          <NotesWidget />
        </div>
        <div className={styles.timerWidget}>
          <TimerWidget />
        </div>
        <div className={styles.weatherWidget}>
          <WeatherWidget />
        </div>
      </div>
    
  );
};

export default Dashboard;
