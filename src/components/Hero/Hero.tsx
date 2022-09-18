import React from 'react';
import style from './hero.module.scss'

function Hero() {
  return (
    <section className={style.hero_container} >
      <section className={style.hero_brightness}/>
      <article className={style.hero_content}>
        <article className={style.herro_message}>
          <h1>Dojo Aguias da Bahia</h1>
          <span>Venha fazer parte da família</span>
        </article>
        <button>
          Entre em contato
        </button>
      </article>
    </section>
  )
}

export default Hero;
