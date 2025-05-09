import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/apiCaseStudy.scss'
import Texts from '../../../shared/utils/texts'

import OverviewTable from '../components/OverviewTable';
import RestApiDiagram from '../components/RestApiDiagram';
import CrudSection from '../components/CrudSection';
import MongoDbSection from '../components/MongoDbSection';
import SecuritySection from '../components/SecuritySection';
import TestingSection from '../components/TestingSection';
import ChallengesSection from '../components/ChallengesSection';
import FinalConclusions from '../components/FinalConclusions';

const ApiCaseStudyView = ({ language }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const { from, activeProject, id } = location.state || {};

    const goBack = () => {
        if (from) {
            navigate(`${from}?project=${id}`, {
                state: { activeProject },
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


            <OverviewTable language={language} Texts={Texts} />
            <div className='case-study-svgs-wrapper'>
                <RestApiDiagram language={language} Texts={Texts} />
                <CrudSection language={language} Texts={Texts} />
                <MongoDbSection language={language} Texts={Texts} />
                <SecuritySection language={language} Texts={Texts} />
                <TestingSection language={language} Texts={Texts} />
                <ChallengesSection language={language} Texts={Texts} />
                <FinalConclusions language={language} Texts={Texts} />
            </div>
            <button onClick={goBack} className="details_link case-study-button">
                {Texts[language].case_api.back_button}
            </button>
        </div>
    )
}

export default ApiCaseStudyView