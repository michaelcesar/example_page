import styles from './item.module.css';

interface ItemProps {
  title: string;
  subtitle: string;
  linkText: string;
  link: string;
}

export default function Item({ title, subtitle, linkText, link }: ItemProps) {
  return (
    <aside className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <a href={link} className={styles.link}>
        {linkText}
      </a>
    </aside>
  );
}
