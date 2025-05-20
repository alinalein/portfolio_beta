import StorageIcon from '@mui/icons-material/Storage';
import Texts, { Language } from '../../../shared/utils/texts';

type MongoDbSectionProps = {
    language: Language;
}

const MongoDbSection = ({ language }: MongoDbSectionProps): JSX.Element => (
    <div className='case-study-section'>
        <StorageIcon className="case-study-svgs" />
        <div className='case-study-header'>
            <p className='case-study-header-p'>
                {Texts[language].case_api.mongodb.tag}
            </p>
            <div className='mongo-section'>
                <p>
                    {Texts[language].case_api.mongodb.introduction_1}</p>
                <p>{Texts[language].case_api.mongodb.introduction_2}</p>
                <pre>
                    <code>
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
    </div>
)
export default MongoDbSection;