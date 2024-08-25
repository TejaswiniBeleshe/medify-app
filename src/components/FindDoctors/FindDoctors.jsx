import { createContext, useEffect, useState } from "react";
import Heading from "../Heading/Heading"
import NavigationBar from "../NavigationBar/NavigationBar";
import styles from "./FindDoctors.module.css"
import SearchBar from "./SearchMedical/SearchBar";
import { Alert } from "bootstrap";
import Medicals from "./Medicals/Medicals";
import { useParams } from "react-router-dom";


export const context = createContext();
const FindDoctors = ()=>{
    const {c,s} = useParams();
    const [cParam,setCParam] = useState(c);
    const [sParam,setSParam] = useState(s);

    const [resData,setResData] = useState([]);
    const [resState,setResState] = useState([]);
    const [resCity,setResCity] = useState([])
    const [ipCity,setIpCity] = useState();
    const [ipState,setIpState] = useState();
    

   
   
    const apiCall = async(api)=>{
        try{
            let respo = await fetch(api);
            let data = await respo.json();
            return data;

        }catch(err){
            console.log('not found')
        }
       

    }

    
    useEffect(()=>{
        let res = apiCall("https://meddata-backend.onrender.com/states");
        console.log(res);
        res.then(ele=>setResState([...ele]));
      
    },[])

    useEffect(()=>{
       let res = apiCall(`https://meddata-backend.onrender.com/cities/${ipState}`);
       console.log(res);
       res.then(ele=>setResCity(ele));
  
    },[ipState])
    const handleSearch = (s="",c="")=>{
        // console.log(resState,resCity)
         let res = apiCall(`https://meddata-backend.onrender.com/data?state=${s}&city=${c}`);
         console.log(res,"initial");
         res.then(ele=>setResData(ele))  
    }

    useEffect(()=>{
        if(c && s){
            console.log(c,s);
            handleSearch(sParam,cParam)
        }
    },[])
    return(
        <div className={styles.findDoctors}>
            <context.Provider value={{ipCity,setIpCity,ipState,setIpState,handleSearch,resState,resCity,resData}}>
            {/* <Heading/> */}
            <NavigationBar/>
             <div className={styles.barSupport}>
             </div>
             <SearchBar/>
             <Medicals/>
              
             </context.Provider>
        </div>
    )
}
export default FindDoctors;