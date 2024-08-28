import styles from "./SearchBooked.module.css";
import { IoMdSearch } from "react-icons/io";
import { LiaHospitalSymbolSolid } from "react-icons/lia";

const SearchBooked = ({hospiName,setHospiName,handleSearch})=>{

    return(
        <div className={`${styles.searchBar} d-flex flex-column flex-lg-row justify-content-evenly`}>
            <div className={`${styles.searchIp} d-flex`} >
                <label htmlFor="state" className="px-2"><LiaHospitalSymbolSolid size={25} /></label>
                <input type="text" placeholder="Search By Hospital"  value={hospiName} onChange={(e)=>setHospiName(e.target.value)}/> 
            </div>
            <div className={styles.btnDiv} >
                <button className={styles.searchBtn} onClick={handleSearch}><IoMdSearch size={25} style={{color:"#FFFFFF"}}/>Search</button>
            </div>
        </div>
    )
}
export default SearchBooked;