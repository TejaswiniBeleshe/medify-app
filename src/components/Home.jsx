import React,{useState,useEffect} from "react";
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
    const [hstate,setHState] = useState("");
    const [hcity,setHCity] = useState("");

    const [hallState,setHAllState] = useState([]);
    const [hallCity,setHAllCity] = useState([]);
    let navigate = useNavigate();
    const handle = ()=>{
        navigate(`finddoctors/${hstate}/${hcity}`)
    }
    const apiCall = async(url)=>{
        try{
            let res = await fetch(url);
            let data = await res.json();
            return data;
        }catch(err){
            console.log("not found");
        }
        
    } 
    useEffect(()=>{
        let res = apiCall("https://meddata-backend.onrender.com/states");
        // console.log(res);
        res.then(ele=>setHAllState([...ele]));
      
    },[])

    useEffect(()=>{
        if(hstate){
        let res = apiCall(`https://meddata-backend.onrender.com/cities/${hstate}`);
        //    console.log(res);
           res.then(ele=>setHAllCity([...ele]));
        }
    },[hstate])

    // const handleSearch = ()=>{
    //     // console.log(resState,resCity)
    //      let res = apiCall(`https://meddata-backend.onrender.com/data?state=${hstate}&city=${hcity}`);
    //      console.log(res);
    //      res.then(ele=>setResData(ele))
         
    // }
    return(
        <div className={`${styles.home}`}>
            {/* <Heading/> */}
            <NavigationBar/>
            <div className={`w-100 ${styles.landingPage}`}>
          
            <LandingPage/>
            </div>
            <SlideCompo/>
            <Lookingfor hstate={hstate} setHState={setHState} setHCity={setHCity} hcity = {hcity} hallState={hallState} hallCity={hallCity} handle={handle}/>
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