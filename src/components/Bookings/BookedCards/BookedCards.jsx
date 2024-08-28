import React,{useEffect,useState} from "react";
import styles from "./BookedCards.module.css"
import image from "../../../assets/desc.png"
import EachBookedCard from "../EachBookedCard/EachBookedCard";
const BookedCards = ({bookedMed,setBookedMed,fData})=>{
    
    useEffect(()=>{
        let res = localStorage.hasOwnProperty("bookings");
        if(res){
            let data = JSON.parse(localStorage.getItem("bookings"));
            setBookedMed(data);
        
        }
        // console.log(res)
    },[])
    return(
        <div className={`${styles.bookedMed} d-flex`}>
            <div className={styles.cards}>
                {   fData.length === 0?
                    bookedMed.length? bookedMed.map(ele=>{
                        return <EachBookedCard ele={ele} />
                    }):"":fData.map(ele=>{
                        return <EachBookedCard ele={ele} />

                    })
                }
        
            </div>
            <div className={`${styles.addDiv} d-none d-lg-block`} >
                <img src={image} alt="not found" width="90%" height="200px" />
            </div>
        </div>
    )
}
export default BookedCards;