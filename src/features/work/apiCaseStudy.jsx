import { useNavigate, useLocation } from 'react-router-dom';
import Texts from '../utils/texts';
import CodeIcon from '@mui/icons-material/Code';
import ExtensionIcon from '@mui/icons-material/Extension'; // Puzzle-like
import LockIcon from '@mui/icons-material/Lock';
import BuildIcon from '@mui/icons-material/Build';
import FlagIcon from '@mui/icons-material/Flag';
import StorageIcon from '@mui/icons-material/Storage';
import EastSharpIcon from '@mui/icons-material/EastSharp';
import BoltIcon from '@mui/icons-material/Bolt';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import InterestsIcon from '@mui/icons-material/Interests';
import './apiCaseStudy.scss'
import GradientExtensionIcon from '../utils/GradientExtensionIcon'

// need adjust to window size , enable scrolling y achse , build small & big screen, 
const ApiCaseStudy = ({ language }) => {

    const navigate = useNavigate();
    const location = useLocation();

    // send from activeItem Object - for component return , id string for the url cretaion (object not accepted)
    const { from, activeProject, id } = location.state || {};

    // loads the active project component and the corresponding url on back button 
    const goBack = () => {
        if (from) {
            navigate(`${from}?project=${id}`, {
                state: { activeProject }
            });
        } else {
            navigate('/#work');
        }
    };

    return (
        <div
            className='case-study-wrapper'
        >
            <div  >
                <h2><span className='span_title'>{Texts[language].case_api.title.charAt(0)}</span>{Texts[language].case_api.title.slice(1)}</h2>
            </div>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>{Texts[language].case_api.overview.purpose_and_context.title}</th>
                            <th>{Texts[language].case_api.overview.project_duration.title}</th>
                            <th>{Texts[language].case_api.overview.objective.title}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>{Texts[language].case_api.overview.purpose_and_context.description}</td>
                            <td>{Texts[language].case_api.overview.project_duration.description}</td>
                            <td>{Texts[language].case_api.overview.objective.description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='case-study-svgs-wrapper'>
                <div className='case-study-section'>
                    <CodeIcon className="case-study-svgs" />
                    <div className='case-study-header'>
                        <p className='case-study-header-p'>Rest API</p>
                        <div className="rest-api-diagram">
                            <p>{Texts[language].case_api.rest_api.p}
                            </p>
                            <div className="top-row">
                                <div className="box">{Texts[language].case_api.rest_api.client}</div>
                                <div className="request-row">
                                    <p className="request-row-p">{Texts[language].case_api.rest_api.request}</p>
                                    {/* width & height removed for better controll */}
                                    <svg viewBox="0 0 150 80" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="10" y1="10" x2="130" y2="10" stroke="black" stroke-width="2" />
                                        <polygon points="130,5 130,15 140,10" fill="black" />
                                        {/* arrow to left  */}
                                        {/* <polygon points="10,5 10,15 0,10" fill="black" /> */}
                                    </svg>

                                </div>
                                <div className="box">SERVER</div>
                            </div>

                            <div className="bottom-row">
                                <div className="response-row">
                                    <div className="arrow-label">{Texts[language].case_api.rest_api.response}</div>
                                    <svg viewBox="0 0 300 80" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0 V60 H290 V0" stroke="black" stroke-width="2" fill="none" />
                                    </svg>

                                </div>
                                <div className="database">{Texts[language].case_api.rest_api.database}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='case-study-section'>
                    <InterestsIcon className="case-study-svgs" />
                    <div className='case-study-header'>

                        <p className='case-study-header-p'>
                            CRUD
                        </p>
                        <div className="crud-section">
                            <p>{Texts[language].case_api.crud.introduction}</p>
                            <span class="crud-text">{Texts[language].case_api.crud.action}</span>
                            <p>{Texts[language].case_api.crud.description}</p>

                            <div className="glow-frame">
                                <div className="glow-inner">
                                    <img src={`${process.env.PUBLIC_URL}/img/CRUD-endpoint.jpg`} className='case-study-pic-crud' alt="CRUD Endpoint" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
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
                <div className='case-study-section'>
                    <LockIcon className="case-study-svgs" />
                    <div className='case-study-header'>
                        <p className='case-study-header-p'>
                            {Texts[language].case_api.access_control.tag}
                        </p>
                        <div className="auth-section">
                            <div className="label"> {Texts[language].case_api.access_control.overview.authentication_title}</div>
                            <div className="desc">
                                {Texts[language].case_api.access_control.overview.authentication} </div>

                            <div className="label">{Texts[language].case_api.access_control.overview.authorization_title}</div>
                            <div className="desc">
                                {Texts[language].case_api.access_control.overview.authorization}                            </div>

                            <div className="label">{Texts[language].case_api.access_control.overview.security_title}</div>
                            <div className="desc">
                                {Texts[language].case_api.access_control.overview.security}                            </div>
                        </div>
                    </div>
                </div>
                <div className='case-study-section'>
                    <BuildIcon className="case-study-svgs" />
                    <div className='case-study-header'>
                        <p className='case-study-header-p'>
                            {Texts[language].case_api.testing.tag}
                        </p>
                        <div className="debugging-section">
                            <p>
                                {Texts[language].case_api.testing.introduction_1}
                            </p>
                            <p> {Texts[language].case_api.testing.introduction_2}
                            </p>
                            <div className='debugging-ui'>
                                <div className="debugging-circles"> {Texts[language].case_api.testing.error}</div>
                                <EastSharpIcon className='debugging-arrow' />
                                <div className="debugging-circles"> {Texts[language].case_api.testing.detects}</div>
                                <EastSharpIcon className='debugging-arrow' />
                                <div className="debugging-circles"> {Texts[language].case_api.testing.solution}</div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='case-study-section'>
                    <BoltIcon className="case-study-svgs" />
                    <div className='case-study-header'>
                        <p className='case-study-header-p'>
                            {Texts[language].case_api.challenges.tag}
                        </p>
                        <div className="challenges-sections">

                            <div className="challenges-section">
                                <DoneAllIcon className="challenges-icon" />
                                <div className="challenges-point">
                                    <h3> {Texts[language].case_api.challenges.overview.strategic_title}
                                    </h3>
                                    <p>{Texts[language].case_api.challenges.overview.strategic}</p>
                                </div>

                            </div>
                            <div className="challenges-section">
                                <DoneAllIcon className="challenges-icon" />
                                <div className="challenges-point">
                                    <h3>{Texts[language].case_api.challenges.overview.implementing_title}</h3>
                                    <p>{Texts[language].case_api.challenges.overview.implementing}
                                        <span> if (req.user.Username !== req.params.Username)</span>
                                    </p>
                                </div>
                            </div>
                            <div className="challenges-section">
                                <DoneAllIcon className="challenges-icon" />
                                <div className="challenges-point">
                                    <h3>{Texts[language].case_api.challenges.overview.resolving_title}</h3>
                                    <p>{Texts[language].case_api.challenges.overview.resolving}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='case-study-section'>
                    <FlagIcon className="case-study-svgs" />
                    <div className='case-study-header'>
                        <p className='case-study-header-p'>
                            {Texts[language].case_api.final_conclusions.tag}
                        </p>
                        <div className='final-section'>
                            <h3>{Texts[language].case_api.final_conclusions.looking_title}
                            </h3>
                            <p>{Texts[language].case_api.final_conclusions.looking_text}</p>

                            <div className='final-puzzle-section'>
                                <GradientExtensionIcon className='first' />
                                <ExtensionIcon className='second' />
                                <GradientExtensionIcon className='third' />
                            </div>
                            <h3>{Texts[language].case_api.final_conclusions.future_title}</h3>
                            <p>{Texts[language].case_api.final_conclusions.future_text}</p>
                        </div>
                    </div>
                </div>

            </div>
            <button onClick={goBack} className="details_link case-study-button">
                {Texts[language].case_api.back_button}            </button>
        </div >
    );
};

export default ApiCaseStudy;