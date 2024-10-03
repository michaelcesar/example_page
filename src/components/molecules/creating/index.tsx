import styles from './creating.module.css';

export default function Creating() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.block}>COMO TRABALHAMOS</div>
        <p className={styles.text}>
          Nosso trabalho se inicia no Product Concept, quando ajudamos o cliente
          a definir a melhor solução para suas dores, passando por todo processo
          de Product Development, onde é construída e validada essa solução e
          posteriormente sua evolução e sustentação
        </p>
        <span>
          Também trabalhamos com formatos específicos de acordo com as
          necessidades da empresa, adaptando nosso processo para atingir os
          objetivos definidos.
        </span>
      </div>
      <div className={styles.box}>Michael</div>
    </section>
  );
}
