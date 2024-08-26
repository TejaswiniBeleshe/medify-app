import React,{useEffect, useState} from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import styles from "./MyBookings.module.css"
import BookedCards from "./Bookings/BookedCards/BookedCards";
import SearchBooked from "./Bookings/SearchBooked/SearchBooked";
const MyBookings = ()=>{
  // const [allBooked,setAllBooked] = useState([]);
    
  //  useEffect(()=>{
  //   if(localStorage.hasOwnProperty('bookings')){
  //     let res = JSON.parse(localStorage.getItem('bookings'));
  //     setAllBooked(res);
  //   }
  //  },[])
    return(
        <>
          <NavigationBar/>
          <div className={styles.barSupport}>
          </div>
          <SearchBooked/>
          <BookedCards/>
        </>
          
    )
}
export default MyBookings;