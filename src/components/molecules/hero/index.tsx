import Words from '@/components/atoms/words';
import styles from './hero.module.css';

export default function Hero() {
  return (
    <section className={styles.section}>
      <Words />
      <h1>
        Produtos digitais<br></br>que mudam negócios.
      </h1>
    </section>
  );
}
