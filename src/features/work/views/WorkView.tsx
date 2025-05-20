import FloatingContainer from "../../../shared/components/FloatingContainer";
import Texts from "../../../shared/utils/texts";
import WorkGridSection from '../components/WorkGridSection'
import renderStyledTitle from "../../../shared/utils/renderStyledTitle";
import { useAppContext } from "../../../shared/context/AppContext";
import '../styles/work.scss'

type WorkViewProps = {
    id: string;
}

const WorkView = ({ id }: WorkViewProps): JSX.Element => {

    const { language } = useAppContext()
    return (
        <FloatingContainer id={id} >
            <div className="content">
                <div className="component_title">
                    {renderStyledTitle(Texts[language].work.title)}
                </div>
                <WorkGridSection />
            </div>
        </FloatingContainer>

    )
}

export default WorkView;