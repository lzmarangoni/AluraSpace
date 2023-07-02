import React, { useState } from 'react'
import Tags from '../Tags'
import fotos from './fotos.json'
import styles from './Galeria.module.scss'
import Cards from '../Cards'


export default function Galeria() {
  const tags = [...new Set(fotos.map(tag => tag.tag))]
  const [novasFotos, setNovasFotos]= useState(fotos)

  const filtrarTag = (tag)=>{
    const fotosFiltradas = fotos.filter((foto) =>{return( foto.tag === tag)})
    setNovasFotos(fotosFiltradas)
  }
  


  return (
    <section className={styles.galeria}>
      
        <h2>Navegue pela galeria</h2>
        <Tags tags={tags} filtrar={filtrarTag} setNovasFotos={setNovasFotos}/>
        <Cards estilo={styles} itens={novasFotos}/>
    </section>
  )
}
