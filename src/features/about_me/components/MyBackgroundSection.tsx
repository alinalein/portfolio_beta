import CSM from '../assets/img/CSM.jpg';
import { useAppContext, Texts } from '../../../shared';

const MyBackground = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section
      className="about_img_div background_div"
      aria-labelledby="background-heading"
      style={{ margin: '-10px auto 10px auto' }}
    >
      <div style={{ textAlign: 'left', padding: '0 10px' }} className="remove_p-margin">
        {Texts[language].about.backgroundText.split('\n\n').map((paragraph, pIndex) => (
          <p key={pIndex}>
            {paragraph
              .split('**')
              .map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}
          </p>
        ))}
      </div>
      <img
        src={CSM}
        alt={
          language === 'en'
            ? 'Illustration of the duties of a Customer Success Manager'
            : 'Darstellung der Aufgaben eines Customer Success Managers'
        }
        className="CSM_pic"
      />
    </section>
  );
};
export default MyBackground;
