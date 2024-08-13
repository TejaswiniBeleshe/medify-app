import React from "react";
import styles from "../LatestNews/LatestNews.module.css"
import Card from "../LatestNews/Card"
const LatestNews = ()=>{
    return(
        <div className={`${styles.cards} d-flex justify-content-evenly align-items-center flex-column flex-lg-row`}>
            <Card/>
            <Card/>
            <Card/>
            
        </div>
    )
}
export default LatestNews;