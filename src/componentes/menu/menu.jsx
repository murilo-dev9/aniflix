import { GoHomeFill} from "react-icons/go";
import { FaSearch, FaClipboardList,FaHeart,FaUserCircle } from "react-icons/fa";
import styles from "./menu.module.css";



const Menu =()=>{
    return(
        <div className={styles.main}>
        <h1>aniflix</h1>
            <div className={styles.Lroutes}>
                <GoHomeFill size={30}/>
                <p>Home</p>
            </div>
            <div className={styles.Lroutes}>
                <FaSearch size={30}/>
                <p>Search</p>
            </div>
            <div className={styles.Lroutes}>
                <FaClipboardList size={30}/>
                <p>My List</p>
            </div>
            <div className={styles.Lroutes}>
                <FaHeart size={30}/>
                <p>Home</p>
            </div>
            <div className={styles.Lroutes}>
                <FaUserCircle size={30}/>
                <p>Profile</p>
            </div>
        </div>
    )
}

export default Menu;