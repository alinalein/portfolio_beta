import { Modal } from '@mui/material';
import { Link } from 'react-router-dom';
import Texts from '../utils/texts.js';
import './project_details.scss';

const ProjectDetails = ({ onClose, title, description, languagesUsed, linkGit, linkLive, phonePic, language, linkCase, features }) => {

    return (
        <Modal
            open={true}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <div className='modal_div'>

                <div className='component_title' style={{ justifyContent: 'space-between' }}>
                    <h2> <span style={{ color: 'var(--main-color)' }}>{title.charAt(0)}</span>{title.slice(1)}</h2>
                    <button onClick={onClose} className='modal_close_button'>x</button>
                </div>
                <div className='project_img_div'>
                    {phonePic.map((src, index) => (
                        <a href={src} target="_blank" rel="noopener noreferrer" key={index} className='project_img'>
                            <img className='project_img' src={src} key={index} alt={title} loading="lazy" style={{ cursor: 'pointer' }}
                            />
                        </a>
                    ))}

                </div>

                <p>{description}</p>

                <p className='modal_technologies' style={{ marginBottom: '5px' }}> Features</p>
                {Array.isArray(features) && features.map((feature, index) => (
                    <div className="feature-item" key={index}>
                        <span className="feature-bullet">❍  </span>
                        <span>{feature}</span>
                    </div>
                ))}


                <div >
                    <p className='modal_technologies' style={{ marginTop: '14px' }}>   {Texts[language].project_details}</p>
                    {languagesUsed.map((language, index) => (
                        <span
                            key={index}
                            className='languagesProject'
                        >
                            {language}
                        </span>
                    ))}
                    {/* when change to render svg instead of written technologies */}
                    {/* {languagesUsed.map((src, index) => (
                        < img key={index} src={src} alt="Language Icon" style={{ padding: '0 10px' }} />
                    ))} */}
                </div>
                <div className='social_item_div'>
                    <a href={linkGit} target="_blank" rel="noopener noreferrer" className='details_link'>GitHub Project</a>
                    {linkLive && (
                        <a href={linkLive} target="_blank" rel="noopener noreferrer" className='details_link'>
                            Live Project
                        </a>
                    )}
                    {/* {linkCase && (
                        <a href={linkCase} target="_blank" rel="noopener noreferrer" className='details_link'>
                            Case Study
                        </a>
                    )} */}
                    {linkCase && (
                        <Link to={linkCase} className='details_link'>
                            Case Study
                        </Link>
                    )}
                </div>
            </div>
        </Modal>
    )

}
export default ProjectDetails