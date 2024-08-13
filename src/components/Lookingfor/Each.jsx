import styles from "../Lookingfor/Each.module.css"
const Each = ({logo,text})=>{
    
        return(
            <div className={`${styles.each} d-flex flex-column justify-content-evenly align-items-center p-4 my-4`}>
                <span>{logo}</span>
                <span className="my-2">{text}</span>
            </div>
        )

}
export default Each;