import fetchNews from "../api/fetchNews";
import { useEffect, useState } from "react";
import styles from "./NewsWidget.module.css";
import formatDateAndTime from "../utils/formatDateAndTime";

const NewsWidget = () => {
  const [news, setNews] = useState();
  const [pubileshedAt, setPublishedAt] = useState({
    data:'',
    time:'',
  });

  useEffect(() => {
    fetchNews().then((data) => {
      if (data.status == "ok") {
        console.log(data.articles);

        const randomIndex = Math.floor(
          Math.random() * data.articles.length
        );
        
        const {date,time} = formatDateAndTime(data.articles[randomIndex].pubileshedAt);
        setPublishedAt({
          ...pubileshedAt,
          date:date,
          time:time,
        })
        setNews(data.articles[randomIndex]);
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <>
        <div className={styles.header}>
          <img src={news?.urlToImage} alt="News Image" />
          <div className={styles.heading}>
            <p>{news?.title}</p>
            <p className={styles.dateAndTime}>
              <span>{pubileshedAt.date}</span>
              <span>{pubileshedAt.time}</span>
            </p>
          </div>
        </div>
        <div className={styles.body}>
          {news?.description}
        </div>
      </>
    </div>
  );
};

export default NewsWidget;
