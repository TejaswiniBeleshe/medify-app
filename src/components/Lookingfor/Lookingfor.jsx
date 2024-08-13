import Each from "./Each";
import styles from "../Lookingfor/Lookingfor.module.css"
import { LiaXRaySolid } from "react-icons/lia";
const Lookingfor= ()=>{
    return(
        <div className={`${styles.parent} d-flex flex-column justify-content-between gap-2`}>
            <div className={`${styles.child1}`}></div>
            <div className={`${styles.child2}`}>
                <p>You may be looking for</p>
                <div className="d-flex flex-wrap gap-2">
                    <Each logo={<LiaXRaySolid size={60} />} text="60"/>
                    <Each logo={<LiaXRaySolid size={60} />} text="60"/>
                    <Each logo={<LiaXRaySolid size={60} />} text="60"/>
                    <Each logo={<LiaXRaySolid size={60} />} text="60"/>
                </div>
            </div>

        </div>
    )
}
export default Lookingfor;