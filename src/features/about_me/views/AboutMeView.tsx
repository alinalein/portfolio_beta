import FloatingContainer from "../../../shared/components/FloatingContainer";
import Texts from "../../../shared/utils/texts";
import AboutText from "../components/AboutText";
import SkillSection from "../components/SkillsSection";
import MyBackgroundSection from "../components/MyBackgroundSection";
import WhyCodingSection from "../components/WhyCodingSection";
import renderStyledTitle from "../../../shared/utils/renderStyledTitle";
import { useAppContext } from "../../../shared/context/AppContext";
import '../styles/about.scss'

type AboutMeViewProps = {
    id: string;
}

const AboutMeView = ({ id }: AboutMeViewProps): JSX.Element => {
    const { language } = useAppContext()


    return (<FloatingContainer id={id} >
        <div className="content">
            {/* Dynamic title for 'About Me' */}
            <div className="component_title">
                {renderStyledTitle(Texts[language].about.title)}
            </div>

            <AboutText />
            {/* Dynamic title for 'Skills & Technologies' */}
            <div className="component_title">
                {renderStyledTitle(Texts[language].about.skillsTitle)}
            </div>

            <SkillSection />

            {/* Dynamic title for 'My background' */}
            <div className="component_title">
                {renderStyledTitle(Texts[language].about.backgroundTitle)}
            </div>
            <MyBackgroundSection />

            {/* Dynamic title for 'Why Coding?' */}
            <div className="component_title">
                {renderStyledTitle(Texts[language].about.whyCodingTitle)}
            </div>

            <WhyCodingSection />
        </div>
    </FloatingContainer>)
}
export default AboutMeView;