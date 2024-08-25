import React from "react";
import styles from "./BookedCards.module.css"
import image from "../../../assets/desc.png"
import EachBookedCard from "../EachBookedCard/EachBookedCard";
const BookedCards = ()=>{
    return(
        <div className={`${styles.bookedMed} d-flex`}>
            <div className={styles.cards}>
                {/* {
                    resData.length? resData.map(ele=>{
                        return <EachMedical ele={ele} handleBook = {handleBook}/>
                    }):""
                } */}
                
                <EachBookedCard/>
            </div>
            <div className={`${styles.addDiv} d-none d-lg-block`} style={{border:"1px solid yellow"}}>
                <img src={image} alt="not found" width="90%" height="200px" />
            </div>
        </div>
    )
}
export default BookedCards;