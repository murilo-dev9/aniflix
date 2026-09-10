import styles from "./App.module.css";
import Menu from "./componentes/menu/menu"
import Search from "./componentes/search/search"
import Card from "./componentes/card/card"
import Banner from "./componentes/bannerD/banner"
const home = () => {
  return (
    <div className={styles.main}>
      <Menu />
      <div className={styles.inicio}>
        <div className={styles.topBar}>
          <Search />
        </div>
        <div className={styles.ctlg}>
          <h1 className={styles.h1}>Destaques</h1>
          <div className={styles.destaque}>
            <Banner />
          </div>
          <h1 className={styles.h1}>Recentes</h1>
          <div className={styles.recentes}>
            <Card />
          </div>
          <h1 className={styles.h1}>Populares</h1>
          <div className={styles.populares}>
            <Card />
          </div>
        </div>
      </div>

    </div>
  )
}

export default home;