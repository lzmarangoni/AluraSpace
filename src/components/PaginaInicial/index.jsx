import React from 'react'
import Menu from '../Menu'
import Cabecalho from '../Cabecalho'
import styles from './PaginaInicial.module.scss'
import Banner from '../Banner'
import Rodape from '../Rodape'
import Galeria from '../Galeria'


export default function PaginaInicial() {
  return (
    <>
        <Cabecalho/>
        <main>
            <section className={styles.principal}>
                <Menu/>
                <Banner/>
            </section>
           
        </main>
        <div>
          <Galeria/>
        </div>
        <Rodape/>
      
    
    </>
  
  )
}
