
import logo from "./logo.png"
import search from "./search.png"
import styles from './Cabecalho.module.scss'


export default function Cabecalho (){
    return(
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo Alura Space" />
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" placeholder="Faça a sua busca"/>
                <img src={search} alt="Lupa de busca" />
            </div>
        </header>
    )
}