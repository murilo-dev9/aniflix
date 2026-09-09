import styles from "./App.module.css";
import Menu from "./componentes/menu/menu"
import Search from "./componentes/search/search"

const home = () => {
  return(
    <div className={styles.main}>
      <Menu/>
      <div className={styles.inicio}>
        <div className={styles.topBar}>
            <Search/>
        </div>
        <div className={styles.gnr}>
          dsadas
        </div>
        <div className={styles.ctlg}>
            asdsadsa
        </div>
      </div>
      
    </div>
  )
}

export default home;