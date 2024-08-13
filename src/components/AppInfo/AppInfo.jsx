import phone1 from "../../assets/phone1.png"
import screen from "../../assets/screen.png"
import styles from "../AppInfo/AppInfo.module.css"
const AppInfo = ()=>{
    return(
        <div className="w-100">
            <div>
                <img src={phone1} alt="not found" width="50%" height="60%" id={styles.p1}/>
                <img src={screen} alt="not found" width="45%" height="50%" id={styles.screen}/>
            </div>

        </div>
    )
}
export default AppInfo;