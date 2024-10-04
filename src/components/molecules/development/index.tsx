import styles from './development.module.css';
import Animation from '@/components/atoms/animation';
import codeAnimation from '../../../../public/animations/code.json';
import lowcodeAnimation from '../../../../public/animations/low_code.json';
import Image from 'next/image';

export default function Creating() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.boxText}>
          <p>Desenvolvimento | High code</p>
          <p className={styles.title}>Desenvolvendo o Produto</p>
          <p className={styles.text}>
            Com uma solução ou hipótese estabelecida, damos início à construção
            do produto. Esse processo abrange todas as etapas do ciclo de
            desenvolvimento: desde a Prototipação, Design UI/UX, passando por
            Desenvolvimento (Code, LowCode), até Testes e a Publicação final.
          </p>
          <div className={styles.boxLogos}>
            <Image
              src="/logos/django.svg"
              width="45"
              height="45"
              alt="django"
            />
            <Image
              src="/logos/nextjs.svg"
              width="45"
              height="45"
              alt="next.js"
            />
            <Image
              src="/logos/reactjs.svg"
              width="45"
              height="45"
              alt="react.js"
            />
          </div>
          <a>Conheça alguns de nossos produtos já desenvolvidos</a>
          <div className={styles.wrapperAnimation}>
            <Animation
              animationData={codeAnimation}
              width="345px"
              height="345px"
            />
          </div>
        </div>

        <div className={styles.boxText}>
          <p>Desenvolvimento | Low code/No code</p>
          <p className={styles.title}>Desenvolvendo o Produto</p>
          <p className={styles.text}>
            Com uma solução ou hipótese estabelecida, damos início à construção
            do produto. Esse processo abrange todas as etapas do ciclo de
            desenvolvimento: desde a Prototipação, Design UI/UX, passando por
            Desenvolvimento (Code, LowCode), até Testes e a Publicação final.
          </p>
          <div className={styles.boxLogos}>
            <Image
              src="/logos/wordpress.svg"
              width="45"
              height="45"
              alt="wordpress"
            />
            <Image
              src="/logos/elementor.svg"
              width="45"
              height="45"
              alt="elementor"
            />
            <Image
              src="/logos/webflow.svg"
              width="45"
              height="45"
              alt="webflow"
            />
          </div>
          <a>Conheça alguns de nossos produtos já desenvolvidos</a>
          <div className={styles.wrapperAnimation}>
            <Animation
              animationData={lowcodeAnimation}
              width="345px"
              height="345px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
