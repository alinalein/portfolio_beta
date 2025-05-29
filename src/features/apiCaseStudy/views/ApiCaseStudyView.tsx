import { useNavigate, useLocation } from 'react-router-dom';

import OverviewSection from '../components/OverviewSection/OverviewSection';
import RestApiSection from '../components/RestApiSection/RestApiSection';
import CrudSection from '../components/CrudSection/CrudSection';
import MongoDbSection from '../components/MongoDbSection/MongoDbSection';
import SecuritySection from '../components/SecuritySection/SecuritySection';
import DebuggingSection from '../components/DebuggingSection/DebuggingSection';
import ChallengesSection from '../components/ChallengesSection/ChallengesSection';
import FinalConclusions from '../components/FinalConclusions/FinalConclusions';

import { useAppContext, Texts, SharedButton, useFocus, Title } from '../../../shared';
import styles from './ApiCaseStudyView.module.scss';

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
    <main
      className={`api_case_study ${styles.api_case_study}`}
      aria-labelledby="api-case-study-overview"
    >
      <div>
        {Title({
          title: Texts[language].case_api.title,
          id: 'api-case-study-overview',
          ref: headingRef,
        })}
      </div>

      <OverviewSection />
      <div className={styles.api_case_study__sections}>
        <RestApiSection />
        <CrudSection />
        <MongoDbSection />
        <SecuritySection />
        <DebuggingSection />
        <ChallengesSection />
        <FinalConclusions />
      </div>
      <SharedButton
        className={styles.api_case_study__back_button}
        title={Texts[language].case_api.back_button}
        goBack={goBack}
      />
    </main>
  );
};

export default ApiCaseStudyView;
