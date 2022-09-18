import React from 'react';
import style from './hero.module.scss'

function Hero() {
  return (
    <section className={style.hero_container} >
      <section className={style.hero_brightness}/>
      <article className={style.hero_content}>
        <h1>Dojo Aguias da Bahia</h1>
      </article>
    </section>
  )
}

export default Hero;
