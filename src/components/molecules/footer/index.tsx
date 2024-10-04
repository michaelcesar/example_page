import Logo from '@/components/atoms/logo';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.wrapper}>
        <div className={styles.boxLeft}>
          <Logo url="/images/logo_white.svg" width={172} height={72}></Logo>
          <h2>Produtos digitais que mudam negócios.</h2>
          <p>
            A Arco é uma empresa especializada na criação de produtos digitais
            que transformam negócios e solucionam problemas, desenvolvendo
            soluções inovadoras que impulsionam o crescimento e a eficiência.
          </p>
        </div>
        <div className={styles.boxRight}>
          <nav>
            <h2>Menu</h2>
            <ul>
              <li>
                <a>Sobre nós</a>
              </li>
              <li>
                <a>Pordutos</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>Consultoria</a>
              </li>
            </ul>
          </nav>

          <nav>
            <h2>Links</h2>
            <ul style={{ textDecoration: 'underline' }}>
              <li>
                <a>Youtube</a>
              </li>
              <li>
                <a>Instagram</a>
              </li>
              <li>
                <a>TikTok</a>
              </li>
              <li>
                <a>Behance</a>
              </li>
            </ul>
          </nav>

          <nav>
            <h2>Contato</h2>
            <ul>
              <li>
                <a>84 9 9709-9839</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <div className={styles.hr}></div>
      <section className={styles.wrapper}>
        <div className={styles.boxLeft}>
          <ul className={styles.ulStyle}>
            <li>
              <p>
                <a>Termos de Uso</a>
              </p>
            </li>
            <div className={styles.divLine}></div>
            <li>
              <p>
                <a>Políticas de Privacidade</a>
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.boxRight} style={{ justifyContent: 'end' }}>
          <p>© Todos os direitos reservados, Arco Content, 2024.</p>
        </div>
      </section>
    </footer>
  );
}
