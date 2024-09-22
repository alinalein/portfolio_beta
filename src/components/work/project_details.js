import { Modal } from '@mui/material';
import Texts from '../utils/texts.js';
import './project_details.scss';

const ProjectDetails = ({ onClose, title, description, languagesUsed, linkGit, linkLive, phonePic, language }) => {

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
                        <img className='project_img' src={src} key={index} alt={title} loading="lazy"
                        />
                    ))}
                </div>

                <p>{description}</p>
                <div style={{ margin: '10px 0' }}>
                    <p className='modal_technologies'>   {Texts[language].project_details}</p>
                    <br />
                    {languagesUsed.map((src, index) => (
                        <img key={index} src={src} alt="Language Icon" style={{ width: 'auto', height: '40px', padding: '0 10px' }} />
                    ))}
                </div>
                <div className='social_item_div'>
                    <a href={linkGit} target="_blank" rel="noopener noreferrer" className='details_link'>GitHub Project</a>
                    {linkLive === '' ?
                        ('')
                        : (
                            <a href={linkLive} target="_blank" rel="noopener noreferrer" className='details_link'>Live Project</a>
                        )}
                </div>
            </div>

        </Modal>
    )

}
export default ProjectDetails