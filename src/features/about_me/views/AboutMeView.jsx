import FloatingContainer from "../../../shared/components/FloatingContainer";
import Texts from "../../../shared/utils/texts";
import AboutText from "../components/AboutText";
import SkillSection from "../components/SkillsSection";
import MyBackgroundSection from "../components/MyBackgroundSection";
import WhyCodingSection from "../components/WhyCodingSection";
import '../styles/about.scss'

const AboutMeView = ({ id, isWidthGreaterThan1050, language }) => (

    <>
        <FloatingContainer id={id} isWidthGreaterThan1050={isWidthGreaterThan1050}>
            <div className="content">
                {/* Dynamic title for 'About Me' */}
                <div className="component_title">
                    <h2>
                        <span className="span_title">
                            {Texts[language].about.title.charAt(0)}
                        </span>
                        {Texts[language].about.title.slice(1)}
                    </h2>
                </div>

                <AboutText language={language} />
                {/* Dynamic title for 'Skills & Technologies' */}
                <div className="component_title">
                    <h2>
                        <span className="span_title">
                            {Texts[language].about.skillsTitle.charAt(0)}
                        </span>
                        {Texts[language].about.skillsTitle.slice(1)}
                    </h2>
                </div>

                <SkillSection />

                {/* Dynamic title for 'My background' */}
                <div className="component_title">
                    <h2>
                        <span className="span_title">
                            {Texts[language].about.backgroundTitle.charAt(0)}
                        </span>
                        {Texts[language].about.backgroundTitle.slice(1)}
                    </h2>
                </div>
                <MyBackgroundSection language={language} />

                {/* Dynamic title for 'Why Coding?' */}
                <div className="component_title">
                    <h2>
                        <span className="span_title">
                            {Texts[language].about.whyCodingTitle.charAt(0)}
                        </span>
                        {Texts[language].about.whyCodingTitle.slice(1)}
                    </h2>
                </div>

                <WhyCodingSection language={language} />
            </div>
        </FloatingContainer>
    </>
)
export default AboutMeView;