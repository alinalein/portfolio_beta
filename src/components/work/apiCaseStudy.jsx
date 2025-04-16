import { useNavigate, useLocation } from 'react-router-dom';
import Texts from '../utils/texts';
import CodeIcon from '@mui/icons-material/Code';
import ExtensionIcon from '@mui/icons-material/Extension'; // Puzzle-like
import LockIcon from '@mui/icons-material/Lock';
import BuildIcon from '@mui/icons-material/Build';
import FlagIcon from '@mui/icons-material/Flag';
import StorageIcon from '@mui/icons-material/Storage';

import './apiCaseStudy.scss'

// need adjust to window size , enable scrolling y achse , build small & big screen, 
const ApiCaseStudy = ({ language, isWidthGreaterThan1050 }) => {

    const navigate = useNavigate();
    const location = useLocation();

    // send from activeItem Object - for component return , id string for the url cretaion (object not accepted)
    const { from, activeProject, id } = location.state || {};

    // loads the active project component and the corresponding url on back button 
    const goBack = () => {
        if (from) {
            navigate(`${from}?project=${id}`, {
                state: { activeProject }
            });;
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
            {/* <img src={`${process.env.PUBLIC_URL}/img/case-study_movie-api.jpg`} alt='CaseStudyPic' className='case-study-pic' /> */}
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>{Texts[language].case_api.overview.purpose_and_context.title}</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>{Texts[language].case_api.overview.project_duration.title}</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>{Texts[language].case_api.overview.objective.title}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{Texts[language].case_api.overview.purpose_and_context.description}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{Texts[language].case_api.overview.project_duration.description}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{Texts[language].case_api.overview.objective.description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='case-study-svgs-wrapper'>
                <div className='case-study-section'>
                    <CodeIcon className="case-study-svgs" />
                    <div className='case-study-header'>
                        <p className='case-study-header-p'>Rest API</p>
                        <div class="rest-api-diagram">
                            <p>A REST API is like a messenger between two different systems that lets them communicate.
                            </p>
                            <div class="top-row">
                                <div class="box">CLIENT</div>
                                <div className="request-row">
                                    <p class="request-row-p">REQUEST</p>
                                    {/* width & height removed for better controll */}
                                    <svg viewBox="0 0 150 80" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="10" y1="10" x2="130" y2="10" stroke="black" stroke-width="2" />
                                        <polygon points="130,5 130,15 140,10" fill="black" />
                                        {/* arrow to left  */}
                                        {/* <polygon points="10,5 10,15 0,10" fill="black" /> */}
                                    </svg>

                                </div>
                                <div class="box">SERVER</div>
                            </div>

                            <div class="bottom-row">
                                <div class="response-row">
                                    <div class="arrow-label">RESPONSE</div>
                                    <svg viewBox="0 0 300 80" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0 V60 H290 V0" stroke="black" stroke-width="2" fill="none" />
                                    </svg>

                                </div>
                                <div class="database">DATABASE</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='case-study-section'>
                    <ExtensionIcon className="case-study-svgs" />
                    <div className='case-study-header'>

                        <p className='case-study-header-p'>
                            CRUD
                        </p>
                        <div class="crud-section">
                            <p>CRUD stands for Create, Read, Update, and Delete. These four operations allow data to be added, viewed, changed, or removed from the database in software applications. This is used when building API endpoints.</p>
                            <span class="crud-text">CRUD IN ACTION</span>
                            <p>The documentation is always there to show how the endpoint that calls a CRUD operation is structured:</p>

                            <div class="glow-frame">
                                <div class="glow-inner">
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
                            Mongo Database
                        </p>
                        <div className='mongo-section'>
                            <p>
                                In a software application, a database is used to store all kinds of information, like  product catalogs.</p>
                            <p>A MongoDB database stores this data in an easy-to-read format, similar to a list:</p>
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
  "ImagePath": "https://image.tmdb.org/t/p/original/veWPhVMQeQKcxggNEU8YmIo52R.jpg",
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
                            Authentication
                        </p>
                        <div className="auth-section">
                            <div className="label">AUTHENTICATION</div>
                            <div className="desc">
                                Basic HTTP authentication securely sends login details in the header, and the API verifies them with the database to log the user in.
                            </div>

                            <div className="label">AUTHORIZATION</div>
                            <div className="desc">
                                If the login is successful, a token is generated and sent with every request. Only users with a valid token can access the app, and the token’s complexity makes it very hard to crack.
                            </div>

                            <div className="label">SECURITY</div>
                            <div className="desc">
                                The movie API uses password hashing, converting passwords into secret codes before storing them. Even if the database is hacked, the real passwords stay hidden and only the user knows them.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='case-study-section'>
                    <BuildIcon className="case-study-svgs" />
                    <div className='case-study-header'>
                        <p className='case-study-header-p'>
                            Debugging
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <p>
                                Postman is a tool that helps developers test how their web servers handle requests and responses.
                            </p>
                            <p>It’s like a digital assistant that helps you make sure everything is communicating properly.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <p>A</p> <p>B</p> <p>C</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='case-study-section'>
                    <FlagIcon className="case-study-svgs" />
                    <div className='case-study-header'>

                        <p className='case-study-header-p'>
                            Final Conclusion
                        </p>
                    </div>
                </div>

            </div>
            <button onClick={goBack} className="details_link case-study-button">
                Go Back
            </button>
        </div >
    );
};

export default ApiCaseStudy;