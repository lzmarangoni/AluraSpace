import React from "react";
import Menu from "../Menu";
import Cabecalho from "../Cabecalho";
import styles from "./PaginaInicial.module.scss";
import Banner from "../Banner";
import Rodape from "../Rodape";
import Galeria from "../Galeria";
import Populares from "../Populares";

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>
        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>

      <Rodape />
    </>
  );
}
