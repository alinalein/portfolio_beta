import React, { useState } from 'react';
import { motion } from 'framer-motion';
import defaultPic from '../../assets/img/strawberry.jpg'
import variants from '../utils/variants'
import { Modal, Box, Typography, Button } from '@mui/material';

import Angular from '../../assets/svgs/Angular.svg'
import Bootstrap from '../../assets/svgs/Bootstrap.svg'
import CSS from '../../assets/svgs/CSS.svg'
import Firebase from '../../assets/svgs/Firebase.svg'
import GitHub from '../../assets/svgs/GitHub.svg'
import HTML from '../../assets/svgs/HTML5.svg'
import JS from '../../assets/svgs/JavaScript.svg'
import Mongo from '../../assets/svgs/MongoDB.svg'
import Node from '../../assets/svgs/Node_js.svg'
import Reacticon from '../../assets/svgs/React.svg'
import ReactNat from '../../assets/svgs/ReactNative.svg'
import SQL from '../../assets/svgs/Sql.svg'
import TS from '../../assets/svgs/Typescript.svg'
import VS from '../../assets/svgs/Visual_Studio.svg'
import './work.scss'

const Work = ({ id, isWidthGreaterThan1050 }) => {
    const [activeItem, setActiveItem] = useState(null);

    const workItems = [
        { imgSrc: defaultPic, title: "Title 1", description: "Short description 1", linkGit: 'https://github.com/alin', linkLive: 'https://github.com/alin', languagesUsed: [ReactNat, SQL, Mongo], phonePic: '' },
        { imgSrc: defaultPic, title: "Title 2", description: "Short description 2", linkGit: 'https://github.com/alin', linkLive: 'https://github.com/alin', languagesUsed: [ReactNat, Reacticon], phonePic: '' },
        { imgSrc: defaultPic, title: "Title 3", description: "Short description 3", linkGit: 'https://github.com/alin', linkLive: 'https://github.com/alin', languagesUsed: [], phonePic: '' },
        { imgSrc: defaultPic, title: "Title 4", description: "Short description 4", linkGit: 'https://github.com/alin', linkLive: 'https://github.com/alin', languagesUsed: [], phonePic: '' },
        { imgSrc: defaultPic, title: "Title 5", description: "Short description 5", linkGit: 'https://github.com/alin', linkLive: 'https://github.com/alin', languagesUsed: [], phonePic: '' },
        { imgSrc: defaultPic, title: "Title 6", description: "Short description 6", linkGit: 'https://github.com/alin', linkLive: 'https://github.com/alin', languagesUsed: [], phonePic: '' },
    ];

    const showDetails = (item) => {
        setActiveItem(item);
        // document.body.style.overflow = 'hidden';
    };

    const onClose = () => {
        setActiveItem(null);
        // document.body.style.overflow = 'auto';
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <motion.div id={id}
            className="floating-container"
            initial={isWidthGreaterThan1050 ? "hidden" : ""}
            animate={isWidthGreaterThan1050 ? "visible" : ""}
            variants={isWidthGreaterThan1050 ? variants : {}}
        >
            <div className="content">
                <div className='component_title' >
                    <h2><span className='span_title'>W</span>ork</h2>
                </div>
                <div className='work_grid'>
                    {workItems.map(item => (
                        <div className='work_grid_item' key={item.title} onClick={() => showDetails(item)}>
                            <div className='work_img_div'>
                                <img className='work_img' src={item.imgSrc} alt={item.title} />
                                <div className="portfolio-overlay"><p className='overlay_plus'>+</p></div>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
                {activeItem &&
                    <Modal
                        open={true}
                        onClose={onClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <h3>{activeItem.title}</h3>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                <img style={{ height: '200px' }} src={activeItem.imgSrc} alt={activeItem.title} />
                                <p>{activeItem.description}</p>
                                <div> <p>Used languages:</p>
                                    {activeItem.languagesUsed.map((src, index) => (
                                        <img key={index} src={src} alt="Language Icon" style={{ width: 'auto', height: '40px', padding: '0 10p' }} />
                                    ))}
                                </div>
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <a href={activeItem.linkGit} target="_blank" rel="noopener noreferrer">GitHub Project</a>
                                <a href={activeItem.linkLive} target="_blank" rel="noopener noreferrer">Live Project</a>
                            </Typography>
                        </Box>
                    </Modal>
                }
            </div>
        </motion.div >
    );
}

export default Work;
