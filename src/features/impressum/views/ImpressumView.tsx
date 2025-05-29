import { useAppContext, Texts } from '../../../shared';
import styles from './ImpressumView.module.scss';

type ImpressumProps = {
  id: string;
};

const Impressum = ({ id }: ImpressumProps): JSX.Element => {
  const { language, isWidthGreaterThan1050 } = useAppContext();

  return (
    <section
      aria-labelledby="impressum-heading"
      className={styles.impressum_page}
      id={id}
      style={{
        marginTop: isWidthGreaterThan1050 ? '0' : '25vh',
      }}
    >
      <h1 id="impressum-heading">Impressum</h1>
      <p>{Texts[language].impressum.information}</p>
      <p>Alina Leinweber</p>
      <p>Zauritzweg 9, 10585 Berlin</p>
      <p>
        {Texts[language].impressum.email}{' '}
        <a href="mailto:leinweber.alina@gmx.de" className={styles.impressum_link}>
          leinweber.alina@gmx.de
        </a>
      </p>
      <p>{Texts[language].impressum.register}</p>
    </section>
  );
};

export default Impressum;
