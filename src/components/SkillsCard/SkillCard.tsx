import React from 'react';
import { karatetype } from '../../types/types';
import styles from './KarateSkils.module.scss';


function SkillCard({karateInf}: karatetype) {
  return (
    <section className={styles.skils_block}>
      <header>
        <h1>Karate É</h1>
      </header>
      <article>
        <span>
          {karateInf}
        </span>
      </article>
    </section>
  );
}

export default SkillCard;
