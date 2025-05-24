import { useAppContext, Texts } from '../../../shared';

const WhyCodingSection = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section aria-labelledby="why-coding-section">
      <div style={{ textAlign: 'left', margin: '30px 10px 20px 10px' }} className="remove_p-margin">
        {Texts[language].about.whyCodingText.split('\n\n').map((paragraph, index) => (
          <p key={index}>
            {paragraph
              .split('**')
              .map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}
          </p>
        ))}
      </div>
    </section>
  );
};
export default WhyCodingSection;
