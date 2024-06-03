import React from 'react';
import { motion } from 'framer-motion';
import contactForm from '../../assets/img/form.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './contact.scss'

const Contact = ({ id, isWidthGreaterThan1050 }) => {

    const variants = {
        // strarting point of the div
        hidden: { opacity: 0, x: '-70vw' },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'tween', duration: 2, ease: 'circOut' }

        }
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
                    <h2><span className='span_title'>C</span>ontact Form</h2>
                </div>
                <div>
                    <img src={contactForm} style={{ width: '70%' }} />
                </div>
                <div className='component_title' >
                    <h2><span className='span_title'>G</span>et in touch</h2>
                </div>
                <div className='social_item_div'>
                    <a href="https://de.linkedin.com/in/alina-leinweber-901b94135" className='social_item menu-item'>
                        <LinkedInIcon className='social_icon' />
                    </a>
                    <a href="https://github.com/alinalein " className='social_item menu-item' >
                        <GitHubIcon className='social_icon' />
                    </a>
                </div>
            </div>

        </motion.div>
    );
}

export default Contact;