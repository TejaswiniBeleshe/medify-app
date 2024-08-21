import styles from "../SearchMedical/Search.module.css"
import { IoMdSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import {context} from "../FindDoctors"
import { useContext } from "react";
const SearchBar = ()=>{
    const {ipCity,setIpCity,ipState,setIpState,handleSearch,resState,resCity} = useContext(context)
    return(
        <div className={`${styles.searchBar} d-flex flex-column flex-lg-row justify-content-between`}>
            <div className={`${styles.ips} d-flex justify-content-between`} style={{border:"1px solid yellow"}} > 
                <div className={styles.stateDiv} >
                  <label htmlFor="state" className="px-2"><CiLocationOn /></label>
                  <select value={ipState} id="state" style={{border:"none"}} onChange={(e)=>setIpState(e.target.value)}>
                    <option value="">State</option>
                    {
                        resState.length?resState.map((ele)=>{
                            return <option value={ele}>{ele}</option>
                        }):[]
                    }

                  </select>
                </div>
                <div className={styles.cityDiv} >
                  <label htmlFor="state" className="px-2"><CiLocationOn /></label>
                
                  <select value={ipCity} id="state" placeholder="City" onChange={(e)=>setIpCity(e.target.value)} >
                    <option value="">city</option>
                    {
                         resCity.length? resCity.map((ele)=>{
                            return <option value={ele}>{ele}</option>
                         }):""

                    }
                   

                  </select>
                </div>
            </div>
            <div className={styles.btnDiv} >
                <button className={styles.searchBtn} onClick={handleSearch}><IoMdSearch size={25} style={{color:"#FFFFFF"}} />Search</button>
            </div>

        </div>
    )
}
export default SearchBar;