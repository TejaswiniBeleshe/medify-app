import Each from "./Each";
import styles from "../Lookingfor/Lookingfor.module.css"
import { PiHospital } from "react-icons/pi";
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegHospital } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { PiAmbulance } from "react-icons/pi";

import { IoMdSearch } from "react-icons/io";
const Lookingfor= ()=>{
    return(
        <div className={`${styles.parent} d-flex flex-column justify-content-between gap-2 d-none d-md-block`}>
            <div className={`${styles.child1} d-flex justify-content-evenly`}>
                <div className={`${styles.searchDiv}`}>
                <IoMdSearch size={30} style={{color:"#9CA3AF"}}/><input type="text" placeholder="State"/>
                </div>
                <div className={`${styles.searchDiv}`}>
                   <IoMdSearch size={30} style={{color:"#9CA3AF"}} /><input type="text" placeholder="City" height="100%" />
                </div>
                <button>
                  <IoMdSearch  size={20} style={{color:"#FFFFFF"}} /> Search   
                </button>

            </div>
            <div className={`${styles.child2}`}>
                <p>You may be looking for</p>
                <div className="d-flex gap-2 px-4">
                    <Each logo={<FaUserDoctor size={60} style={{color:"#2AA7FF"}}/>} text="Doctors"/>
                    <Each logo={<PiHospital size={60} style={{color:"#2AA7FF"}} />} text="Labs"/>
                    <Each logo={<FaRegHospital size={60} style={{color:"#2AA7FF"}} />} text="Hospitals"/>
                    <Each logo={<GiMedicines size={60} style={{color:"#2AA7FF"}} />} text="Medical Store"/>
                    <Each logo={<PiAmbulance size={60} style={{color:"#2AA7FF"}} />} text="Ambulance"/>
                </div>
            </div>

        </div>
    )
}
export default Lookingfor;