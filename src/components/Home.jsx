import React from "react";
import styles from "./Home.module.css"
import Heading from "./Heading/Heading";
import NavigationBar from "./NavigationBar/NavigationBar";
import LandingPage from "./LandingPage/LandingPage";
import SlideCompo from "./SlideCompo/SlideCompo";
import Lookingfor from "./Lookingfor/Lookingfor";


const Home = ()=>{
    return(
        <div className={`${styles.home}`}>
            <Heading/>
            <div className={`w-100 ${styles.landingPage}`}>
            <NavigationBar/>
            <LandingPage/>
            </div>
            <SlideCompo/>
            <Lookingfor/>
           
        </div>
    )
}
export default Home;