import React from "react";
import styles from "./Home.module.css"
import Heading from "./Heading/Heading";
import NavigationBar from "./NavigationBar/NavigationBar";
import LandingPage from "./LandingPage/LandingPage";
import SlideCompo from "./SlideCompo/SlideCompo";
import Lookingfor from "./Lookingfor/Lookingfor";
import FindSpecialisation from "./FindSpecialisation/FindSpecialisation";
import SpecialistList from "./SpecialistList/SpecialistList";
import PatientCare from "./PatientCare/PatientCare";
import LatestNews from "./LatestNews/LatestNews";
import AskedQue from "./AskedQue/AskedQue";

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
            <FindSpecialisation/>
            <SpecialistList/>
            <PatientCare/>
            <LatestNews/>
            <AskedQue/>
           
        </div>
    )
}
export default Home;