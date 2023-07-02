import React from 'react'
import fotosPopulares from './populares-fotos.json'
import styles from './Populares.module.scss'

export default function Populares() {
  return (
    <aside className={styles.populares}>
        <h2>Populares</h2>
        <ul className={styles.populares__imagens}>
            {fotosPopulares.map(popular => {
                return(
                    <li key={popular.id}>
                       <img src={popular.path} alt="" /> 
                    </li>
                )
            })}
        </ul>
        <button>Ver mais fotos</button>
    </aside>
  )
}
