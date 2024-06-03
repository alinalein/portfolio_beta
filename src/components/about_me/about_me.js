import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../../assets/img/strawberry.jpg'
import Tools from '../utils/tools';
import './about.scss'

const AboutMe = ({ id, isWidthGreaterThan1050 }) => {

    const variants = {
        // strarting point of the div
        hidden: { opacity: 0, x: '-70vw' },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'tween', duration: 2, ease: 'circOut' }
            // transition: { type: 'tween', duration: 2, ease: 'easeOut' }
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
                <div>
                    <div className='component_title' >
                        <h2><span className='span_title'>A</span>bout me</h2>
                    </div>
                    <div className='about_img_div'>
                        <div style={{ width: '20vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={profilePic} alt='Profile picture' className="about_pic" />
                        </div>
                        {/* on smaller screens with to 100% */}
                        <div style={{ display: 'flex', textAlign: 'left', alignItems: 'center', width: '90%', flexDirection: 'column', margin: '0 10px' }}>
                            <p> Welcome to my page, I am Alina, some text about me will come soon.
                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                                dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                                takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            {/* <a href='../../assets/img/CV.pdf' class="link" target="_blank" download="CV.pdf"><span>D</span>onwload CV</a> */}
                        </div>
                    </div>
                </div>
                <div className='component_title'>
                    <h2><span className='span_title'>S</span>kills & Technologies</h2>
                </div>
                <div className='about_img_div'>
                    <Tools />
                </div>
                <div className='component_title'>
                    <h2><span className='span_title'>W</span>hy coding?</h2>
                </div>
                <p>Some more text ... </p>
            </div>
        </motion.div>
    );
}

export default AboutMe;