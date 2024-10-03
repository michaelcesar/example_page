import Header from '@/components/molecules/header';
import styles from './home.module.css';
import Hero from '@/components/molecules/hero';

export default function Home() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <Header></Header>
        <Hero></Hero>
      </div>
    </section>
  );
}
