import React from 'react'
import favorito from './favorito.png'
import open from './open.png'


export default function Cards({estilo, itens}) {
  return (
    <ul className={estilo.galeria__cards}>
          {itens.map( (item) => {
            return(
            <li key={item.id} className={estilo.galeria__card}>
              <img 
                className={estilo.galeria__imagem}
                src={item.imagem}
                alt={item.titulo}
              />
              <p className={estilo.galeria__descricao}>{item.titulo}</p>
              <div>
                <p>{item.creditos}</p>
                <span>
                  <img src={favorito} alt="Icone coração de curtir" />
                  <img src={open} alt="ícone de abrir modal" />
                </span>
              </div>
            </li>
            )
          })}
        </ul>
  )
}
