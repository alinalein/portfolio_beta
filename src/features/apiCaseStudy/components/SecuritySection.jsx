import LockIcon from '@mui/icons-material/Lock';

const SecuritySection = ({ language, Texts }) => (

    <>
        <div className='case-study-section'>
            <LockIcon className="case-study-svgs" />
            <div className='case-study-header'>
                <p className='case-study-header-p'>
                    {Texts[language].case_api.access_control.tag}
                </p>
                <div className="auth-section">
                    <div className="label">
                        {Texts[language].case_api.access_control.overview.authentication_title}

                    </div>
                    <div className="desc">
                        {Texts[language].case_api.access_control.overview.authentication}
                    </div>

                    <div className="label">
                        {Texts[language].case_api.access_control.overview.authorization_title}

                    </div>
                    <div className="desc">
                        {Texts[language].case_api.access_control.overview.authorization}
                    </div>

                    <div className="label">
                        {Texts[language].case_api.access_control.overview.security_title}
                    </div>
                    <div className="desc">
                        {Texts[language].case_api.access_control.overview.security}
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default SecuritySection;