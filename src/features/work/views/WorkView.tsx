import FloatingContainer from '../../../shared/components/FloatingContainer';
import Texts from '../../../shared/utils/texts';
import WorkGridSection from '../components/WorkGridSection';
import renderStyledTitle from '../../../shared/utils/renderStyledTitle';
import useFocusOnMount from '../../../shared/utils/useFocusOnMount ';
import { useAppContext } from '../../../shared/context/AppContext';
import '../styles/work.scss';

type WorkViewProps = {
  id: string;
};

const WorkView = ({ id }: WorkViewProps): JSX.Element => {
  const { language, focusKey } = useAppContext();

  const { headingRef } = useFocusOnMount(focusKey);

  return (
    <FloatingContainer id={id}>
      <div className="content">
        <div className="component_title">
          {renderStyledTitle({
            title: Texts[language].work.title,
            id: 'work-section',
            ref: headingRef,
            tabIndex: -1,
          })}
        </div>
        <WorkGridSection />
      </div>
    </FloatingContainer>
  );
};

export default WorkView;
