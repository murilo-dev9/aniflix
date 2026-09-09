import { GoHomeFill} from "react-icons/go";
import {FaClipboardList,FaHeart,FaUserCircle } from "react-icons/fa";
import styles from "./menu.module.css";



const Menu =()=>{
    return(
        <div className={styles.main}>
        <h1>aniflix</h1>
            <div className={styles.Lroutes}>
                <GoHomeFill size={40} color="white"/>
                <p>Home</p>
            </div>
            
            <div className={styles.Lroutes}>
                <FaClipboardList size={40}/>
                <p>My List</p>
            </div>
            <div className={styles.Lroutes}>
                <FaHeart size={40}/>
                <p>Home</p>
            </div>
            <div className={styles.Lroutes}>
                <FaUserCircle size={40}/>
                <p>Profile</p>
            </div>
        </div>
    )
}

export default Menu;