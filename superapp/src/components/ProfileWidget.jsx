import styles from "./ProfileWidget.module.css";

const ProfileWidget = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const userSelection = JSON.parse(localStorage.getItem("userMovies"));
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <img className={styles.avatar} src="./image 14.png" alt="" />
      </div>
      <div className={styles.rightSection}>
        <ul className={styles.text}>
          <li>{userData.name}</li>
          <li>{userData.email}</li>
          <li>{userData.username}</li>
        </ul>
      </div>
      <div className={styles.tilesContainer}>
          {
  userSelection.slice(0,4).map((category)=>(
    <div className={styles.tiles} key = {category.id}>
      {category.movie}
    </div>
  )
    
  )
          
          }
      </div>
   
    </div>
  )
}

export default ProfileWidget;