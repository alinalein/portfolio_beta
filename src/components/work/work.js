import React from 'react';
import { motion } from 'framer-motion';
import defaultPic from '../../assets/img/strawberry.jpg'
import './work.scss'

const Work = ({ id, isWidthGreaterThan1050 }) => {

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
                    <h2><span className='span_title'>W</span>ork</h2>
                </div>
                <div className='work_grid'>
                    <div className='work_grid_item'>
                        <div className='work_img_div'>
                            <img className='work_img' src={defaultPic} ></img>
                            <div className="portfolio-overlay"><p className='overlay_plus'>+</p></div>
                        </div>
                        <h3>Title</h3>
                        <p>Short discription</p>
                    </div>
                    <div className='work_grid_item' >
                        <div className='work_img_div'>
                            <img className='work_img' src={defaultPic} ></img>
                            <div className="portfolio-overlay"><p className='overlay_plus'>+</p></div>
                        </div>
                        <h3>Title</h3>
                        <p>Short discription</p>
                    </div>
                    <div className='work_grid_item' >
                        <div className='work_img_div'>
                            <img className='work_img' src={defaultPic} ></img>
                            <div className="portfolio-overlay"><p className='overlay_plus'>+</p></div>
                        </div>
                        <h3>Title</h3>
                        <p>Short discription</p>
                    </div>
                    <div className='work_grid_item' >
                        <div className='work_img_div'>
                            <img className='work_img' src={defaultPic} ></img>
                            <div className="portfolio-overlay"><p className='overlay_plus'>+</p></div>
                        </div>
                        <h3>Title</h3>
                        <p>Short discription</p>
                    </div>
                    <div className='work_grid_item' >
                        <div className='work_img_div'>
                            <img className='work_img' src={defaultPic} ></img>
                            <div className="portfolio-overlay"><p className='overlay_plus'>+</p></div>
                        </div>
                        <h3>Title</h3>
                        <p>Short discription</p>
                    </div>
                    <div className='work_grid_item' >
                        <div className='work_img_div'>
                            <img className='work_img' src={defaultPic} ></img>
                            <div className="portfolio-overlay"><p className='overlay_plus'>+</p></div>
                        </div>
                        <h3>Title</h3>
                        <p>Short discription</p>
                    </div>
                </div>
            </div>
        </motion.div >
    );
}

export default Work;
