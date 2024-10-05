import Item from '@/components/atoms/item';
import styles from './grow.module.css';

const GrowItems = [
  {
    title: 'Webdesign',
    subtitle: 'Aumente as conversões do seu site com um design aprimorado.',
    linkText: 'SAIBA MAIS',
    link: '/web-design'
  },
  {
    title: 'SEO',
    subtitle: 'Melhore seu ranking nos motores de busca e aumente o tráfego.',
    linkText: 'EXPLORAR',
    link: '/seo'
  },
  {
    title: 'Sistemas',
    subtitle: 'Melhore sua presença online com marketing direcionado.',
    linkText: 'DESCOBRIR',
    link: '/marketing'
  },
  {
    title: 'E-commerce',
    subtitle: 'Expanda seu negócio com ferramentas de e-commerce de ponta.',
    linkText: 'COMECE AGORA',
    link: '/ecommerce'
  }
];

export default function Grow() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.boxLeft}>
        <h2>
          O que você
          <span> precisa</span>
          <br></br>para <span>crescer</span>
        </h2>
        <h3>Temos as soluções certas para o seu negócio.</h3>
      </div>
      <div className={styles.boxRight}>
        {GrowItems.map((item, index) => (
          <Item
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            linkText={item.linkText}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}
