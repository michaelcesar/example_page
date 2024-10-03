import Animation from '@/components/atoms/animation';
import styles from './creating.module.css';
import creatingAnimation from '../../../../public/animations/creating.json';

export default function Creating() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.block}>COMO TRABALHAMOS</div>
        <p className={styles.text}>
          Nosso trabalho começa auxiliando o cliente a identificar a solução
          ideal para suas necessidades. A partir daí, conduzimos todo o processo
          de desenvolvimento, desde a construção até a validação da solução,
          garantindo também sua evolução e suporte contínuo, para que o produto
          se mantenha eficiente e alinhado com as demandas do mercado.
        </p>
        <span>
          Com todos os objetios alinhados e estabelecidos, podemos proporcionar
          soluções sob medida para resolver seus problemas.
        </span>
      </div>
      <div className={styles.boxRight}>
        <Animation
          animationData={creatingAnimation}
          width="450px"
          height="450px"
        />
      </div>
    </section>
  );
}
