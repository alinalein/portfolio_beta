import EastSharpIcon from '@mui/icons-material/EastSharp';
import BuildIcon from '@mui/icons-material/Build';
import Texts from '../../../shared/utils/texts';
import { useAppContext } from '../../../shared/context/AppContext';

const TestingSection = (): JSX.Element => {

    const { language } = useAppContext();

    return (
        <div className='case-study-section'>
            <BuildIcon className="case-study-svgs" />
            <div className='case-study-header'>
                <p className='case-study-header-p'>
                    {Texts[language].case_api.testing.tag}
                </p>
                <div className="debugging-section">
                    <p>
                        {Texts[language].case_api.testing.introduction_1}
                    </p>
                    <p> {Texts[language].case_api.testing.introduction_2}
                    </p>
                    <div className='debugging-ui'>
                        <div className="debugging-circles"> {Texts[language].case_api.testing.error}</div>
                        <EastSharpIcon className='debugging-arrow' />
                        <div className="debugging-circles"> {Texts[language].case_api.testing.detects}</div>
                        <EastSharpIcon className='debugging-arrow' />
                        <div className="debugging-circles"> {Texts[language].case_api.testing.solution}</div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default TestingSection;