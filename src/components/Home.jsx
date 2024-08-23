import React,{useState} from "react";
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

import OurFamily from "./OurFamily/OurFamily";
import { useNavigate } from "react-router-dom";

const Home = ()=>{
    let [name,setName ] = useState('');
    let [lname,setlname] = useState('');
    let navigate = useNavigate();
    const handle = ()=>{
        navigate(`finddoctors/${name}/${lname}`)
    }
    return(
        <div className={`${styles.home}`}>
            {/* <Heading/> */}
            <form onSubmit={handle}>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="text" value={lname} onChange={(e)=>setlname(e.target.value)} />
                <button type="submit">submit</button>
            </form>
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
            <OurFamily/>
            {/* <AskedQue/> */}
        </div>
    )
}
export default Home;