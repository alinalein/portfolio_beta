import FloatingContainer from "../../../shared/components/FloatingContainer";
import Texts, { Language } from "../../../shared/utils/texts";
import WorkGridSection from '../components/WorkGridSection'
import renderStyledTitle from "../../../shared/utils/renderStyledTitle";
import '../styles/work.scss'

type WorkViewProps = {
    id: string;
    isWidthGreaterThan1050: boolean;
    language: Language
}

const WorkView = ({ id, isWidthGreaterThan1050, language }: WorkViewProps): JSX.Element => (
    <>
        <FloatingContainer id={id} isWidthGreaterThan1050={isWidthGreaterThan1050}>
            <div className="content">
                <div className="component_title">
                    {renderStyledTitle(Texts[language].work.title)}
                </div>
                <WorkGridSection language={language} />
            </div>
        </FloatingContainer>
    </>
);

export default WorkView;