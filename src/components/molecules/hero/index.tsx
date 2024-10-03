import Words from '@/components/atoms/words';
import styles from './hero.module.css';

export default function Hero() {
  return (
    <section className={styles.section}>
      <Words />
      <h1>
        <span className={styles.span}>Produtos</span> digitais<br></br>que mudam
        <span className={styles.span}> negócios</span>.
      </h1>
    </section>
  );
}
