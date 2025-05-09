import BoltIcon from '@mui/icons-material/Bolt';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const ChallengesSection = ({ language, Texts }) => (
    <>
        <div className='case-study-section'>
            <BoltIcon className="case-study-svgs" />
            <div className='case-study-header'>
                <p className='case-study-header-p'>
                    {Texts[language].case_api.challenges.tag}
                </p>
                <div className="challenges-sections">

                    <div className="challenges-section">
                        <DoneAllIcon className="challenges-icon" />
                        <div className="challenges-point">
                            <h3> {Texts[language].case_api.challenges.overview.strategic_title}
                            </h3>
                            <p>{Texts[language].case_api.challenges.overview.strategic}</p>
                        </div>

                    </div>
                    <div className="challenges-section">
                        <DoneAllIcon className="challenges-icon" />
                        <div className="challenges-point">
                            <h3>{Texts[language].case_api.challenges.overview.implementing_title}</h3>
                            <p>{Texts[language].case_api.challenges.overview.implementing}
                                <span> if (req.user.Username !== req.params.Username)</span>
                            </p>
                        </div>
                    </div>
                    <div className="challenges-section">
                        <DoneAllIcon className="challenges-icon" />
                        <div className="challenges-point">
                            <h3>{Texts[language].case_api.challenges.overview.resolving_title}</h3>
                            <p>{Texts[language].case_api.challenges.overview.resolving}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
export default ChallengesSection;