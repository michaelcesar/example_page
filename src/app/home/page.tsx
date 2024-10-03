import Header from '@/components/molecules/header';
import styles from './home.module.css';
import Hero from '@/components/molecules/hero';
import Products from '@/components/molecules/products';

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.content}>
        <Header></Header>
        <Hero></Hero>
        <div className={styles.hr}></div>
        <Products />
      </section>
    </main>
  );
}
