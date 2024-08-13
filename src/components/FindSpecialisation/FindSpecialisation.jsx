import styles from "../FindSpecialisation/FindSpecialisation.module.css";
import EachSpecialize from "./Eachspecialize";
import { FaRegHospital } from "react-icons/fa";
import { LuStethoscope } from "react-icons/lu";
import { PiHeartbeatBold } from "react-icons/pi";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { GiCorkedTube } from "react-icons/gi";
import { MdOutlinePsychology } from "react-icons/md";
import { LiaHospitalAltSolid } from "react-icons/lia";
import { LiaXRaySolid } from "react-icons/lia";


const FindSpecialisation = ()=>{
    return(
        // <div className={`${styles.specialize}  d-flex flex-wrap gap-5`}>
        //     <EachSpecialize logo = {<FaRegHospital size="60" style={{color:"#2AA7FF"}}/>} />
        //     <EachSpecialize logo = {<LuStethoscope size="60" style={{color:"#2AA7FF"}}/>} />
        //     <EachSpecialize logo = {<PiHeartbeatBold size="60" style={{color:"#2AA7FF"}}/>} />
        //     <EachSpecialize logo = {<MdOutlineMonitorHeart size="60" style={{color:"#2AA7FF"}}/>} />
        //     <EachSpecialize logo = {<GiCorkedTube size="60" style={{color:"#2AA7FF"}}/>} />
        //     <EachSpecialize logo = {<MdOutlinePsychology size="60" style={{color:"#2AA7FF"}}/>} />
        //     <EachSpecialize logo = {<LiaHospitalAltSolid size="60" style={{color:"#2AA7FF"}}/>} />
        //     <EachSpecialize logo = {<LiaXRaySolid size="60" style={{color:"#2AA7FF"}}/>} />



        // </div>
        <div className={`${styles.specialize}`}>
            <p id={styles.heading}>Find By Specialisation</p>
        <div>
            <div className="row row-cols-2 row-cols-lg-4">
               <div className="col">
               <EachSpecialize text="Dentistry" logo = {<FaRegHospital size="60" style={{color:"#2AA7FF"}}/>} />
               </div>
               <div className="col">
               <EachSpecialize text="Primary Care" logo = {<LuStethoscope size="60" style={{color:"#2AA7FF"}}/>} />
               </div>
               <div className="col">
               <EachSpecialize text="Cardiology" logo = {<PiHeartbeatBold size="60" style={{color:"#2AA7FF"}}/>} />
               </div>
              <div className="col">
                <EachSpecialize text="MRI Resonance" logo = {<MdOutlineMonitorHeart size="60" style={{color:"#2AA7FF"}}/>} />
              </div>
              <div className="col">
              <EachSpecialize text="Blood Test" logo = {<GiCorkedTube size="60" style={{color:"#2AA7FF"}}/>} />
              </div>
              <div className="col"><EachSpecialize text="Piscologist" logo = {<MdOutlinePsychology size="60" style={{color:"#2AA7FF"}}/>} /></div>
              <div className="col"> <EachSpecialize text="Laboratory" logo = {<LiaHospitalAltSolid size="60" style={{color:"#2AA7FF"}}/>} /></div>
              <div className="col"> <EachSpecialize text="X-Ray" logo = {<LiaXRaySolid size="60" style={{color:"#2AA7FF"}}/>} /></div>
            </div>
       </div>
       <div className={styles.viewBtn}>
       <button className="btn btn-primary">View All</button>

       </div>
           
       </div>
    )
}
export default FindSpecialisation;