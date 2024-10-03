import styles from './development.module.css';
import Animation from '@/components/atoms/animation';
import developmentAnimation from '../../../../public/animations/development.json';

export default function Creating() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.animationBox}>
          <Animation
            animationData={developmentAnimation}
            height="200px"
            width="200px"
          />
        </div>
        <div className={styles.boxText}>
          <p className={styles.title}>Desenvolvendo o Produto</p>
          <p className={styles.text}>
            Com uma solução ou hipótese estabelecida, damos início à construção
            do produto. Esse processo abrange todas as etapas do ciclo de
            desenvolvimento: desde a Prototipação, Design UI/UX, passando por
            Desenvolvimento (Code, LowCode), até Testes e a Publicação final.
          </p>
          <a>Conheça alguns de nossos produtos já desenvolvidos</a>
        </div>
      </div>
      <div className={styles.boxRight}></div>
    </section>
  );
}
