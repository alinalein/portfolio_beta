import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../../assets/img/strawberry.jpg';
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
            className="about_container floating-container"
            initial={isWidthGreaterThan1050 ? "hidden" : ""}
            animate={isWidthGreaterThan1050 ? "visible" : ""}
            variants={isWidthGreaterThan1050 ? variants : {}}
        >

            <div className="content">
                <div className='about_img_div'>
                    <div>
                        <img src={profilePic} alt='Profile picture' className="about_pic" />
                    </div>
                    <div style={{ margin: '0 50px', textAlign: 'left' }}>
                        <h1>About</h1>
                        <p> Welcome to my page, I am Alina, some text about me will come soon. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div> Skills I have carousel.......... </div>
                <div> Why I want to be a Developer, text comig soon..........  </div>
                <button style={{ width: '50vw', alignSelf: 'center' }}> Download My CV </button>
            </div>

        </motion.div>
    );
}

export default AboutMe;