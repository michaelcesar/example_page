import Header from '@/components/molecules/header';
import styles from './home.module.css';
import Hero from '@/components/molecules/hero';
import Products from '@/components/molecules/products';
import Creating from '@/components/molecules/creating';
import Development from '@/components/molecules/development';
import Footer from '@/components/molecules/footer';
import Rocket from '@/components/molecules/rocket';

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.content}>
        <Header></Header>
        <Hero></Hero>
        <div className={styles.hr}></div>
        <Products />
        <Creating />
        <Development />
        <Rocket />
        <Footer></Footer>
      </section>
    </main>
  );
}
