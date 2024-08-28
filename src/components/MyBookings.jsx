import React,{useState} from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import styles from "./MyBookings.module.css"
import BookedCards from "./Bookings/BookedCards/BookedCards";
import SearchBooked from "./Bookings/SearchBooked/SearchBooked";

const MyBookings = ()=>{
  const [bookedMed,setBookedMed] = useState([]);
  const [fData,setFDate] = useState([])
  //  useEffect(()=>{
  //   if(localStorage.hasOwnProperty('bookings')){
  //     let res = JSON.parse(localStorage.getItem('bookings'));
  //     setAllBooked(res);
  //   }
  //  },[])
    const [hospiName,setHospiName] = useState('');

    const handleSearch = ()=>{
      let filteredData = bookedMed.filter((ele)=>{
        let name = hospiName.toUpperCase();
        return ele.h_name.includes(name);
      })
      setFDate([...filteredData]);
    
    }
    return(
        <>
          <NavigationBar/>
          <div className={styles.barSupport}>
          </div>
          <SearchBooked setHospiName={setHospiName} hospiName={hospiName} handleSearch={handleSearch}/>
          <BookedCards bookedMed={bookedMed} setBookedMed={setBookedMed} fData={fData}/>
        </>
          
    )
}
export default MyBookings;