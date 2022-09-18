import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss'

function Header() {

  const [scroll, setScroll] = useState(0)

  const verifyScroll = () => setInterval(() => setScroll(window.scrollY), 100);

  const updateScroll = () => {
    verifyScroll()
  }

  useEffect(() => {
    updateScroll()
    return () => clearInterval(verifyScroll())
  }, [])

  return (
    <header style={{
      backgroundColor: scroll > 125 ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.0)',
      padding: scroll > 125 ? '1rem' : '2rem' ,
      }}
      className={styles.header}>
        <h1>Links úteis</h1>
      <section 
      style={{ marginTop: scroll > 125 ? '0rem' : '2rem' }}
      className={styles.header_container}>
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
        </nav>
      </section>
      <hr
        style={{
          marginTop: scroll > 125 ? '0.6rem' : '2rem',
          width: scroll > 125 ? '30%' : '40%',
        }}
        className={styles.header_footer_bar}
      />
    </header>
  )
}

export default Header;
