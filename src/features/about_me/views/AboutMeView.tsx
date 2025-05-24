import AboutText from '../components/AboutText';
import SkillSection from '../components/SkillsSection';
import MyBackgroundSection from '../components/MyBackgroundSection';
import WhyCodingSection from '../components/WhyCodingSection';

import {
  useAppContext,
  FloatingContainer,
  Texts,
  useFocus,
  renderStyledTitle,
} from '../../../shared';

import '../styles/about.scss';

interface AboutMeViewProps {
  id: string;
}

const AboutMeView = ({ id }: AboutMeViewProps): JSX.Element => {
  const { language, focusKey } = useAppContext();
  const { headingRef } = useFocus(focusKey);

  return (
    <FloatingContainer id={id}>
      <div className="content">
        {/* Dynamic title for 'About Me' */}
        <div className="component_title">
          {renderStyledTitle({
            title: Texts[language].about.title,
            id: 'about-heading',
            ref: headingRef,
          })}
        </div>

        <AboutText />
        {/* Dynamic title for 'Skills & Technologies' */}
        <div className="component_title">
          {renderStyledTitle({
            title: Texts[language].about.skillsTitle,
            id: 'skills-heading',
          })}
        </div>

        <SkillSection />

        {/* Dynamic title for 'My background' */}
        <div className="component_title">
          {renderStyledTitle({
            title: Texts[language].about.backgroundTitle,
            id: 'background-heading',
          })}
        </div>
        <MyBackgroundSection />

        {/* Dynamic title for 'Why Coding?' */}
        <div className="component_title">
          {renderStyledTitle({
            title: Texts[language].about.whyCodingTitle,
            id: 'why-coding-section',
          })}
        </div>

        <WhyCodingSection />
      </div>
    </FloatingContainer>
  );
};
export default AboutMeView;
