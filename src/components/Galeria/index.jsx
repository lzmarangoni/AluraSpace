import React from 'react'
import Tags from '../Tags'
import fotos from './fotos.json'
import styles from './Galeria.module.scss'
import favorito from './favorito.png'
import open from './open.png'


export default function Galeria() {
  return (
    <section className={styles.galeria}>
      
        <h2>Navegue pela galeria</h2>
        <Tags/>
        <ul className={styles.galeria__cards}>
          {fotos.map( (foto) => {
            return(
            <li key={foto.id} className={styles.galeria__card}>
              <img 
                className={styles.galeria__imagem}
                src={foto.imagem}
                alt={foto.titulo}
              />
              <p className={styles.galeria__descricao}>{fotos.titulo}</p>
              <div>
                <p>{foto.creditos}</p>
                <span>
                  <img src={favorito} alt="Icone coração de curtir" />
                  <img src={open} alt="ícone de abrir modal" />
                </span>
              </div>
            </li>
            )
          })}
        </ul>
    </section>
  )
}
