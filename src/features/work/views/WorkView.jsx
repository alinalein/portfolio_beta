import FloatingContainer from "../../../shared/components/FloatingContainer";
import Texts from "../../../shared/utils/texts";
import WorkGridSection from '../components/WorkGridSection'
import '../styles/work.scss'

const WorkView = ({ id, isWidthGreaterThan1050, language }) => (
    <>
        <FloatingContainer id={id} isWidthGreaterThan1050={isWidthGreaterThan1050}>
            <div className="content">
                <div className="component_title">
                    <h2>
                        <span className="span_title">
                            {Texts[language].work.title.charAt(0)}
                        </span>
                        {Texts[language].work.title.slice(1)}
                    </h2>
                </div>
                <WorkGridSection language={language} Texts={Texts} />
            </div>
        </FloatingContainer>
    </>
);

export default WorkView;