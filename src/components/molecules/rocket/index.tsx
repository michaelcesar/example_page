import Animation from '@/components/atoms/animation';
import styles from './rocket.module.css';
import creatingAnimation from '../../../../public/animations/rocket.json';
import Button from '@/components/atoms/button';

export default function Rocket() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.box}>
        <h2 className={styles.text}>
          A transformação digital é o caminho para decolar seu negócio.
        </h2>
        <span style={{ marginBottom: '16px' }}>
          Desenvolvemos soluções personalizadas que potencializam o crescimento
          do seu negócio, integrando tecnologia de ponta com estratégias que
          impulsionam resultados reais.
        </span>
        <Button text="QUERO ESCALAR MEU NEGÓCIO" width="70%" />
      </div>
      <div className={styles.boxRight}>
        <Animation
          animationData={creatingAnimation}
          width="340px"
          height="340px"
        />
      </div>
    </section>
  );
}
