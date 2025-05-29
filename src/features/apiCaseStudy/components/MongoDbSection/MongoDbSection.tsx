import StorageIcon from '@mui/icons-material/Storage';

import { useAppContext, Texts } from '../../../../shared';
import viewStyles from '../../views/ApiCaseStudyView.module.scss';
import styles from './MongoDbSection.module.scss';

const MongoDbSection = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section
      className={`case_study__section ${viewStyles.case_study__section}`}
      aria-labelledby="mongo-db-section"
    >
      <StorageIcon
        className={`case_study__icon ${viewStyles.case_study__icon}`}
        aria-hidden="true"
      />
      <div className={viewStyles.case_study__header}>
        <h2 id="mongo-db-section" className={viewStyles.case_study__title}>
          {Texts[language].case_api.mongodb.tag}
        </h2>
        <div className={styles.mongo}>
          <p>{Texts[language].case_api.mongodb.introduction_1}</p>
          <p>{Texts[language].case_api.mongodb.introduction_2}</p>
          <pre
            aria-label={
              language === 'en' ? 'MongoDB document example' : 'Beispiel für ein MongoDB-Dokument'
            }
          >
            <code className={`mongo__code ${styles.mongo__code}`}>
              {`{
  "_id": "ObjectId('65a9b1abeb496f127613d9b8')",
  "Title": "The Green Mile",
  "Genre": {
    "Name": "Drama",
    "Description": "Drama is a category of narrative fiction intended to be more serious than humorous in tone."
  },
  "Director": {
    "Name": "Frank Darabont",
    "Bio": "Hungarian-American film director, screenwriter, and producer.",
    "Birth": "1959",
    "Death": null
  },
  "ImagePath": "https://image.tmdb./example.jpg",
  "Featured": true,
  "Description": "The lives of guards on Death Row are affected by one of their charges: a man accused of child murder and rape, yet who has a mysterious gift.",
  "Actors": [
    "Tom Hanks",
    "Michael Clarke Duncan",
    "David Morse"
  ]
}`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};
export default MongoDbSection;
