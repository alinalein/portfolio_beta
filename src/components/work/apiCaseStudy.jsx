import { useNavigate, useLocation } from 'react-router-dom';
import Texts from '../utils/texts';
import CodeIcon from '@mui/icons-material/Code';
import ExtensionIcon from '@mui/icons-material/Extension'; // Puzzle-like
import LockIcon from '@mui/icons-material/Lock';
import BuildIcon from '@mui/icons-material/Build';
import FlagIcon from '@mui/icons-material/Flag';

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
            <img src={`${process.env.PUBLIC_URL}/img/case-study_movie-api.jpg`} alt='CaseStudyPic' className='case-study-pic' />
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
            <div className='case-study-svgs-div'>
                <CodeIcon className="case-study-svgs" />
                <p>
                    Rest API
                </p>
                <ExtensionIcon className="case-study-svgs" />
                <p>
                    CRUD & Mongo
                </p>
                <LockIcon className="case-study-svgs" />
                <p>
                    Authentication
                </p>
                <BuildIcon className="case-study-svgs" />
                <p>
                    Debugging
                </p>
                <FlagIcon className="case-study-svgs" />
                <p>
                    Final Conclusion
                </p>
            </div>

            <button onClick={goBack} className="details_link">
                Go Back
            </button>
        </div>
    );
};

export default ApiCaseStudy;