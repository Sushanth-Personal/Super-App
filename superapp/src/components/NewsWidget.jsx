import fetchNews from "../api/fetchNews";
import { useEffect, useState } from "react";
import styles from "./NewsWidget.module.css";
import formatDateAndTime from "../utils/formatDateAndTime";

const NewsWidget = () => {
  const [news, setNews] = useState();
  const [publishedAt, setPublishedAt] = useState({
    data:'',
    time:'',
  });

 const [loading, setLoading] = useState(true);
 


  useEffect(() => {
    fetchNews().then((data) => {
      if (data.status == "ok") {
        console.log(data.articles);

        const randomIndex = Math.floor(
          Math.random() * data.articles.length
        );
        
        const {date,time} = formatDateAndTime(data.articles[randomIndex].pubileshedAt);
        setPublishedAt({
          ...publishedAt,
          date:date,
          time:time,
        })
        setLoading(false);
        setNews(data.articles[randomIndex]);
      }
    });
  }, []);

  return (
  
  loading?
  (
    <div className = {styles.skeletonContainer}>
      <div className = {`${styles.skeletonBox} ${styles.skeletonHeader}`}></div>
      <div className = {`${styles.skeletonBox} ${styles.skeletonHeading}`}></div>
    </div>
  ):(<>
  <div className={styles.container}>

<div className={styles.header}>
<img src={news?.urlToImage} alt="News Image" />
<div className={styles.heading}>
  <p>{news?.title}</p>
  <p className={styles.dateAndTime}>
    <span>{publishedAt.date}</span>
    <span>{publishedAt.time}</span>
  </p>
</div>
</div>
<div className={styles.body}>
{news?.description}
</div>


</div>
  </>
  
  )

    
    
  );
};

export default NewsWidget;
