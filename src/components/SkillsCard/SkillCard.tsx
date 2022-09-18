import React, { useState, useEffect } from 'react';
import { karatetype } from '../../types/types';
import styles from './KarateSkils.module.scss';

function SkillCard({karateInf, index}: {karateInf: string, index: number}) {
  const [scroll, setScroll] = useState(0)
  console.log(index)

  const verifyScroll = () => setInterval(() => setScroll(window.scrollY), 100);

  const updateScroll = () => {
    verifyScroll()
  }

  useEffect(() => {
    updateScroll()
    return () => clearInterval(verifyScroll())
  }, [])
  return (
    <section
      style={{
        marginTop: scroll > 150 ? '0rem' : '20rem',
        transition: `all 0.${index}s`,
      }}
      className={styles.skils_block}
      >
      <article>
        <h1>
          {karateInf}
        </h1>
      </article>
    </section>
  );
}

export default SkillCard;
