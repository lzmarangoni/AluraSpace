
import logo from "./logo.png"
import styles from './Cabecalho.module.scss'


export default function Cabecalho (){
    return(
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo Alura Space" />
            <div>
                <input placeholder="Faça a sua busca"/>
                <img src="" alt="" />
            </div>
        </header>
    )
}