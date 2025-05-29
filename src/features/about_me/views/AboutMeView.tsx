import AboutSection from '../components/AboutSection/AboutSection';
import SkillSection from '../components/SkillsSection/SkillsSection';
import MyBackgroundSection from '../components/MyBackgroundSection/MyBackgroundSection';
import WhyCodingSection from '../components/WhyCodingSection/WhyCodingSection';

import { useAppContext, FloatingContainer, Texts, useFocus, Title } from '../../../shared';

interface AboutMeViewProps {
  id: string;
}

const AboutMeView = ({ id }: AboutMeViewProps): JSX.Element => {
  const { language, focusKey } = useAppContext();
  const { headingRef } = useFocus(focusKey);

  return (
    <FloatingContainer id={id}>
      <div className="view__content">
        {/* Dynamic title for 'About Me' */}
        <div className="section__title">
          {Title({
            title: Texts[language].about.title,
            id: 'about-heading',
            ref: headingRef,
          })}
        </div>

        <AboutSection />
        {/* Dynamic title for 'Skills & Technologies' */}
        <div className="section__title">
          {Title({
            title: Texts[language].about.skillsTitle,
            id: 'skills-heading',
          })}
        </div>

        <SkillSection />

        {/* Dynamic title for 'My background' */}
        <div className="section__title">
          {Title({
            title: Texts[language].about.backgroundTitle,
            id: 'background-heading',
          })}
        </div>
        <MyBackgroundSection />

        {/* Dynamic title for 'Why Coding?' */}
        <div className="section__title">
          {Title({
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
