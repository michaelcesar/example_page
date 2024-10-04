import Button from '@/components/atoms/button';
import styles from './header.module.css';
import Logo from '@/components/atoms/logo';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <ul>
          <li>Sobre nós</li>
          <li>Produtos</li>
          <li>Portfólio</li>
          <li>Michael</li>
        </ul>
      </nav>
      <Button text="Entrar em contato" />
    </header>
  );
}
