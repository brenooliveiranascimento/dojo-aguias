import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <h2>Links úteis</h2>
      <section className={styles.header_container}>
        <nav>
          <Link href="about">
            <a>Sobre</a>
          </Link>
          <Link href="contato">
            <a>Contato</a>
          </Link>
          <Link href="about">
            <a>Locais</a>
          </Link>
          <Link href="about">
            <a>Fotos</a>
          </Link>
        </nav>
      </section>
    </header>
  )
}

export default Header;
