import styles from './example.module.css';

interface ExampleProps {
  link?: string;
  image?: string;
}

export default function Example({ link, image }: ExampleProps) {
  return (
    <article
      className={styles.wrapper}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.box}>
        {link && <a href={link}>VISITAR</a>}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19M12 5L19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </article>
  );
}
