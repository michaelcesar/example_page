import Example from '@/components/atoms/example';
import styles from './portfolio.module.css';

export default function Portfolio() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.boxText}>
        <p>PORTFOLIO</p>
        <h1>
          Conheça alguns de nossos{' '}
          <span className={styles.span}>trabalhos</span>
        </h1>
        <h3 className={styles.text}>
          Nossos clientes são empresas que buscam o desenvolvimento de produtos
          digitais através de um processo incremental buscando melhoria
          contínua.
        </h3>
      </div>
      <div className={styles.box}>
        <Example
          image="/images/monaliza_albuquerque_studio.webp"
          link="https://monalizaalbuquerque.com.br/"
        />
        <Example
          image="/images/dra_erica_beatriz.webp"
          link="https://ericabeatriz.com/"
        />
      </div>
    </section>
  );
}
