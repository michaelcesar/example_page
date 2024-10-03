import styles from './products.module.css';
import Image from 'next/image';

export default function Products() {
  return (
    <aside className={styles.container}>
      <article className={styles.box}>
        <div className={styles.boxImage}>
          <Image
            src="/images/performance.webp"
            alt="performance"
            width={40}
            height={40}
          />
        </div>

        <h2 className={styles.title}>
          UI/<span className={styles.titleEffect}>UX</span>
        </h2>
        <p className={styles.text}>
          Web design focado na experiência do Usuário.
        </p>
      </article>
      <article className={styles.box}>
        <div className={styles.boxImage}>
          <Image
            src="/images/rocket.webp"
            alt="rocket"
            width={40}
            height={40}
          />
        </div>

        <h2 className={styles.title}>Performance</h2>
        <p className={styles.text}>
          Sites otimizados para gerar grandes resultados
        </p>
      </article>
      <article className={styles.box}>
        <div className={styles.boxImage}>
          <Image src="/images/mouse.webp" alt="mouse" width={40} height={40} />
        </div>

        <h2 className={styles.title}>Tecnologia</h2>
        <p className={styles.text}>
          Modernidade e tecnologias sempre atualizadas
        </p>
      </article>
      <article className={styles.box}>
        <div className={styles.boxImage}>
          <Image
            src="/images/mouse_top.webp"
            alt="mouse top"
            width={40}
            height={40}
          />
        </div>

        <h2 className={styles.title}>Flexibilidade</h2>
        <p className={styles.text}>Seu site em constante aprimoramento.</p>
      </article>
    </aside>
  );
}
