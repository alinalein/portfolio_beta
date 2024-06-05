import { Modal, Box, Typography, CardMedia, CardActions, Card, CardHeader, CardContent, Button } from '@mui/material';
import './project_details.scss';

const ProjectDetails = ({ onClose, title, imgSrc, description, languagesUsed, linkGit, linkLive }) => {

    return (
        <Modal
            open={true}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <div className='modal_div'>
                <div className='project_img_div'>
                    <img className='project_img' src={imgSrc} alt={title} />
                </div>
                <div className='component_title' >
                    <h3> <span style={{ color: 'var(--main-color)' }}>{title.charAt(0)}</span>{title.slice(1)}</h3>
                </div>
                <p>{description}</p>
                <div style={{ margin: '20px 0' }}>
                    {languagesUsed.map((src, index) => (
                        <img key={index} src={src} alt="Language Icon" style={{ width: 'auto', height: '40px', padding: '0 10px' }} />
                    ))}
                </div>
                <div className='social_item_div'>
                    <a href={linkGit} target="_blank" rel="noopener noreferrer" className='menu-item details_link'>GitHub Project</a>
                    {linkLive === '' ?
                        ('')
                        : (
                            <a href={linkLive} target="_blank" rel="noopener noreferrer" className='menu-item details_link'>Live Project</a>
                        )}
                </div>
            </div>

        </Modal>
    )

}
export default ProjectDetails