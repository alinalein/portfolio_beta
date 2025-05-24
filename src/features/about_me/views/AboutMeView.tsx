import FloatingContainer from '../../../shared/components/FloatingContainer';
import Texts from '../../../shared/utils/texts';
import AboutText from '../components/AboutText';
import SkillSection from '../components/SkillsSection';
import MyBackgroundSection from '../components/MyBackgroundSection';
import WhyCodingSection from '../components/WhyCodingSection';
import renderStyledTitle from '../../../shared/utils/renderStyledTitle';
import { useAppContext } from '../../../shared/context/AppContext';
import useFocusOnMount from '../../../shared/utils/useFocusOnMount ';
import '../styles/about.scss';

interface AboutMeViewProps {
  id: string;
}

const AboutMeView = ({ id }: AboutMeViewProps): JSX.Element => {
  const { language, focusKey } = useAppContext();
  const { headingRef } = useFocusOnMount(focusKey);

  return (
    <FloatingContainer id={id}>
      <div className="content">
        {/* Dynamic title for 'About Me' */}
        <div className="component_title">
          {renderStyledTitle({
            title: Texts[language].about.title,
            id: 'about-heading',
            ref: headingRef,
            tabIndex: -1,
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
