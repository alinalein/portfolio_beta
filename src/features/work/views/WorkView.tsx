import WorkGridSection from '../components/WorkGridSection';

import {
  useAppContext,
  useFocus,
  renderStyledTitle,
  Texts,
  FloatingContainer,
} from '../../../shared';

import '../styles/work.scss';

type WorkViewProps = {
  id: string;
};

const WorkView = ({ id }: WorkViewProps): JSX.Element => {
  const { language, focusKey } = useAppContext();

  const { headingRef } = useFocus(focusKey);

  return (
    <FloatingContainer id={id}>
      <div className="content">
        <div className="component_title">
          {renderStyledTitle({
            title: Texts[language].work.title,
            id: 'work-section',
            ref: headingRef,
          })}
        </div>
        <WorkGridSection />
      </div>
    </FloatingContainer>
  );
};

export default WorkView;
