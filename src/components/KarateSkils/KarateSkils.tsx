import React from 'react';
import { karateIsTypes } from '../../types/types';
import SkillCard from '../SkillsCard/SkillCard';
import styles from './KarateSkils.module.scss'

function KarateSkils() {

  const karateIs: karateIsTypes[] = [
    {skilBody: 'Defesa Pessoal'},
    {skilBody: 'Auto Confiança'},
    {skilBody: 'Disciplina'},
  ]

  return (
  <section className={styles.karate_skils_caintainer}>
    <section className={styles.skil_block_cintainer}>
      {
        karateIs.map((karateInf) => (
          <SkillCard karateInf={ karateInf.skilBody }/>
        ))
      }
    </section>
  </section>
  )
}

export default KarateSkils;
