import Image from 'next/image';
import React from 'react';
import styles from './KarateBenefits.module.scss';
import KarateSide from '../../Images/karate-side.jpg';

function KarateBenefits() {

  return (
    <section className={styles.karate_benefits_container}>
      <section className={styles.karate_content}>
        <section className={styles.image}>
          <Image
            width={600}
            height={600}
            src={KarateSide}
          />
        </section>
        <article className={styles.body}>
          <header>
            <h1>Esforçar-se para a formação do carater</h1>
          </header>
          <main>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.In elementis mé pra quem é amistosis quis leo.Leite de capivaris, leite de mula manquis sem cabeça.Manduma pindureta quium dia nois paga.
            </p>
          </main>
        </article>
      </section>
    </section>
  )
}

export default KarateBenefits;
