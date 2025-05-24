import { useNavigate, useLocation } from 'react-router-dom';

import OverviewTable from '../components/OverviewTable';
import RestApiDiagram from '../components/RestApiDiagram';
import CrudSection from '../components/CrudSection';
import MongoDbSection from '../components/MongoDbSection';
import SecuritySection from '../components/SecuritySection';
import DebuggingSection from '../components/DebuggingSection';
import ChallengesSection from '../components/ChallengesSection';
import FinalConclusions from '../components/FinalConclusions';

import { useAppContext, Texts, SharedButton, useFocus, renderStyledTitle } from '../../../shared';
import '../styles/apiCaseStudy.scss';

const ApiCaseStudyView = (): JSX.Element => {
  const { language } = useAppContext();
  const navigate = useNavigate();
  const { headingRef } = useFocus();

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
    <main className="case-study-wrapper" aria-labelledby="api-case-study-overview">
      <div>
        {renderStyledTitle({
          title: Texts[language].case_api.title,
          id: 'api-case-study-overview',
          ref: headingRef,
        })}
      </div>

      <OverviewTable />
      <div className="case-study-svgs-wrapper">
        <RestApiDiagram />
        <CrudSection />
        <MongoDbSection />
        <SecuritySection />
        <DebuggingSection />
        <ChallengesSection />
        <FinalConclusions />
      </div>
      <SharedButton
        className={'case-study-button'}
        title={Texts[language].case_api.back_button}
        goBack={goBack}
      />
    </main>
  );
};

export default ApiCaseStudyView;
