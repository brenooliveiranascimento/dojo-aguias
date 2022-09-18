import React from 'react';
import { ContactBtn } from '../Buttons/Buttons';
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
        <ContactBtn>
          Entre em contato
        </ContactBtn>
      </article>
    </section>
  )
}

export default Hero;
