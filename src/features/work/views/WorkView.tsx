import WorkGridSection from '../components/WorkGridSection/WorkGridSection';

import { useAppContext, useFocus, Title, Texts, FloatingContainer } from '../../../shared';

type WorkViewProps = {
  id: string;
};

const WorkView = ({ id }: WorkViewProps): JSX.Element => {
  const { language, focusKey } = useAppContext();

  const { headingRef } = useFocus(focusKey);

  return (
    <FloatingContainer id={id}>
      <div className="view__content">
        <div className="section__title">
          {Title({
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
