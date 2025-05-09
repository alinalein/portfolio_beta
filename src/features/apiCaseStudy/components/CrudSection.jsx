import InterestsIcon from '@mui/icons-material/Interests';

const CrudSection = ({ language, Texts }) => (

    <>
        <div className='case-study-section'>
            <InterestsIcon className="case-study-svgs" />
            <div className='case-study-header'>

                <p className='case-study-header-p'>
                    CRUD
                </p>
                <div className="crud-section">
                    <p>{Texts[language].case_api.crud.introduction}</p>
                    <span class="crud-text">{Texts[language].case_api.crud.action}</span>
                    <p>{Texts[language].case_api.crud.description}</p>

                    <div className="glow-frame">
                        <div className="glow-inner">
                            <img src={`${process.env.PUBLIC_URL}/img/CRUD-endpoint.jpg`} className='case-study-pic-crud' alt="CRUD Endpoint" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
)

export default CrudSection; 