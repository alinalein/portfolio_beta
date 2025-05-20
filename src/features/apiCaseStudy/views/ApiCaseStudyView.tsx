import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/apiCaseStudy.scss'
import Texts, { Language } from '../../../shared/utils/texts'

import OverviewTable from '../components/OverviewTable';
import RestApiDiagram from '../components/RestApiDiagram';
import CrudSection from '../components/CrudSection';
import MongoDbSection from '../components/MongoDbSection';
import SecuritySection from '../components/SecuritySection';
import TestingSection from '../components/TestingSection';
import ChallengesSection from '../components/ChallengesSection';
import FinalConclusions from '../components/FinalConclusions';
import renderStyledTitle from '../../../shared/utils/renderStyledTitle';

type ApiCaseStudyViewProps = {
    language: Language
}
const ApiCaseStudyView = ({ language }: ApiCaseStudyViewProps): JSX.Element => {

    const navigate = useNavigate();

    type LocationState = {
        from?: string;
        activeProject?: string;
        id?: string;
    };
    const location = useLocation();
    const { from, activeProject, id } = (location.state as LocationState) || {};

    const goBack = (): void => {
        if (from) {
            navigate(`${from}?project=${id}`, {
                state: { activeProject },
            });
        } else {
            navigate('/#work');
        }
    };

    return (
        <main
            className='case-study-wrapper'
        >
            <div  >
                {renderStyledTitle(Texts[language].case_api.title)}
            </div>


            <OverviewTable language={language} />
            <div className='case-study-svgs-wrapper'>
                <RestApiDiagram language={language} />
                <CrudSection language={language} />
                <MongoDbSection language={language} />
                <SecuritySection language={language} />
                <TestingSection language={language} />
                <ChallengesSection language={language} />
                <FinalConclusions language={language} />
            </div>
            <button onClick={goBack} className="details_link case-study-button">
                {Texts[language].case_api.back_button}
            </button>
        </main >
    )
}

export default ApiCaseStudyView