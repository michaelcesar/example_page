import Button from '@/components/atoms/button';
import styles from './header.module.css';
import Logo from '@/components/atoms/logo';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo url="/images/logo_text.svg" />
      <nav>
        <ul>
          <li>Sobre nós</li>
          <li>Produtos</li>
          <li>Portfólio</li>
          <li>Consultoria</li>
        </ul>
      </nav>
      <Button text="Entrar em contato" />
    </header>
  );
}
