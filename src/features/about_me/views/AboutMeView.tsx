import FloatingContainer from "../../../shared/components/FloatingContainer";
import Texts, { Language } from "../../../shared/utils/texts";
import AboutText from "../components/AboutText";
import SkillSection from "../components/SkillsSection";
import MyBackgroundSection from "../components/MyBackgroundSection";
import WhyCodingSection from "../components/WhyCodingSection";
import renderStyledTitle from "../../../shared/utils/renderStyledTitle";
import '../styles/about.scss'

type AboutMeViewProps = {
    id: string;
    isWidthGreaterThan1050: boolean;
    language: Language;
}

const AboutMeView = ({ id, isWidthGreaterThan1050, language }: AboutMeViewProps): JSX.Element => (

    <FloatingContainer id={id} isWidthGreaterThan1050={isWidthGreaterThan1050}>
        <div className="content">
            {/* Dynamic title for 'About Me' */}
            <div className="component_title">
                {renderStyledTitle(Texts[language].about.title)}
            </div>

            <AboutText language={language} />
            {/* Dynamic title for 'Skills & Technologies' */}
            <div className="component_title">
                {renderStyledTitle(Texts[language].about.skillsTitle)}
            </div>

            <SkillSection />

            {/* Dynamic title for 'My background' */}
            <div className="component_title">
                {renderStyledTitle(Texts[language].about.backgroundTitle)}
            </div>
            <MyBackgroundSection language={language} />

            {/* Dynamic title for 'Why Coding?' */}
            <div className="component_title">
                {renderStyledTitle(Texts[language].about.whyCodingTitle)}
            </div>

            <WhyCodingSection language={language} />
        </div>
    </FloatingContainer>
)
export default AboutMeView;