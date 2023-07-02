import React from 'react'
import styles from './Tags.module.scss'
import fotos from "../Galeria/fotos.json"

export default function Tags({tags, filtrar, setNovasFotos}) {
  return (
    <div className={styles.tags}>
      <p>Filtre por TAGS</p>
      <ul className={styles.tags__lista}>
        {tags.map(tag => {
          return(
            <li key={tag} onClick={()=>filtrar(tag)}>{tag}</li>
          )
        })}
        <li onClick={()=>{setNovasFotos(fotos)}}>Todas</li>
      </ul>
    </div>
  )
}
