import styles from "./search.module.css"

const Search =()=>{
    return(
        <div className={styles.main}>
            <input className={styles.input} type="text" placeholder="pesquisar" />
        </div>
    )
}

export default Search;