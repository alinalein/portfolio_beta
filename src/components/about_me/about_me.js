import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../../assets/img/image2.jpeg'
import Tools from '../utils/tools';
import CV from '../../assets/pdf/CV.pdf'
import variants from '../utils/variants'
import './about.scss'

const AboutMe = ({ id, isWidthGreaterThan1050 }) => {

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
                        <div className='img_div' >
                            <img src={profilePic} alt='Profile' className="about_pic" />
                        </div>
                        <div className='text_div'>
                            <p> Welcome to my page, I am Alina, some text about me will come soon.
                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                                dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                                takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            <a href={CV} style={{ color: 'var(--main-color)' }} rel='noreferrer' target='_blank'>Donwload CV</a>
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