import FlagIcon from '@mui/icons-material/Flag';
import ExtensionIcon from '@mui/icons-material/Extension'; // Puzzle-like
import GradientExtensionIcon from '../utils/GradientExtensionIcon'

const FinalConclusions = ({ language, Texts }) => (
    <>
        <div className='case-study-section'>
            <FlagIcon className="case-study-svgs" />
            <div className='case-study-header'>
                <p className='case-study-header-p'>
                    {Texts[language].case_api.final_conclusions.tag}
                </p>
                <div className='final-section'>
                    <h3>{Texts[language].case_api.final_conclusions.looking_title}
                    </h3>
                    <p>{Texts[language].case_api.final_conclusions.looking_text}</p>

                    <div className='final-puzzle-section'>
                        <GradientExtensionIcon className='first' />
                        <ExtensionIcon className='second' />
                        <GradientExtensionIcon className='third' />
                    </div>
                    <h3>{Texts[language].case_api.final_conclusions.future_title}</h3>
                    <p>{Texts[language].case_api.final_conclusions.future_text}</p>
                </div>
            </div>
        </div>

    </>
)
export default FinalConclusions; 