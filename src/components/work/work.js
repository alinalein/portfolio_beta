import React, { useState } from 'react';
import { motion } from 'framer-motion';
import variantsBig from '../utils/variantsAnimation'
import Texts from '../utils/texts.js';
import ProjectDetails from './project_details'

// svg icons
import Angular from '../../assets/svgs/Angular.svg'
import Bootstrap from '../../assets/svgs/Bootstrap.svg'
import CSS from '../../assets/svgs/CSS.svg'
import Firebase from '../../assets/svgs/Firebase.svg'
import HTML from '../../assets/svgs/HTML5.svg'
import JS from '../../assets/svgs/JavaScript.svg'
import Mongo from '../../assets/svgs/MongoDB.svg'
import Node from '../../assets/svgs/Node_js.svg'
import Reacticon from '../../assets/svgs/React.svg'
import ReactNat from '../../assets/svgs/ReactNative.svg'
import TS from '../../assets/svgs/Typescript.svg'
import AWS from '../../assets/svgs/AWS.svg'
import Jest from '../../assets/svgs/Jest.svg'
import Cucumber from '../../assets/svgs/Cucumber.svg'
import Postman from '../../assets/svgs/Postman.svg'
import Express from '../../assets/svgs/Express.svg'
import Redux from '../../assets/svgs/Redux.svg'
import Saas from '../../assets/svgs/sass-1.svg'
import './work.scss'

const Work = ({ id, isWidthGreaterThan1050, language }) => {

    const [activeItem, setActiveItem] = useState(null);

    // project pictures imports from public folder
    const meet = `${process.env.PUBLIC_URL}/img/meet.png`;
    const meet_phone = `${process.env.PUBLIC_URL}/img/react_meet-phone.png`;

    const chat_work = `${process.env.PUBLIC_URL}/img/chat_work.png`;
    const chat_main_phone = `${process.env.PUBLIC_URL}/img/chat_main.png`;
    const chat_chat_phone = `${process.env.PUBLIC_URL}/img/chat_chat.png`;

    const angular = `${process.env.PUBLIC_URL}/img/myFlix_Angular.png`;
    const angular_phone = `${process.env.PUBLIC_URL}/img/angular_phone_main.png`;

    const pokemon = `${process.env.PUBLIC_URL}/img/pokemon.png`;
    const pokemon_phone = `${process.env.PUBLIC_URL}/img/js_pokemon-phone.png`;

    const api = `${process.env.PUBLIC_URL}/img/api.png`;
    const postman = `${process.env.PUBLIC_URL}/img/postman.png`;

    const react = `${process.env.PUBLIC_URL}/img/myFlix_React.png`;
    const react_phone = `${process.env.PUBLIC_URL}/img/myFlix_react_main_phone.png`;

    const workItems = [
        {
            imgSrc: angular,
            title: Texts[language].work.projects.angular.title,
            description: Texts[language].work.projects.angular.description,
            linkGit: 'https://github.com/alinalein/myFlix-Angular-client',
            linkLive: 'https://alinalein.github.io/myFlix-Angular-client/welcome',
            languagesUsed: [TS, Angular, Saas],
            phonePic: [angular_phone, angular]
        },
        {
            imgSrc: chat_work,
            title: Texts[language].work.projects.chat.title,
            description: Texts[language].work.projects.chat.description,
            linkGit: 'https://github.com/alinalein/chat',
            linkLive: '',
            languagesUsed: [ReactNat, Firebase],
            phonePic: [chat_main_phone, chat_chat_phone]
        },
        {
            imgSrc: pokemon,
            title: Texts[language].work.projects.pokemon.title,
            description: Texts[language].work.projects.pokemon.description,
            linkGit: 'https://github.com/alinalein/JS-App',
            linkLive: 'https://alinalein.github.io/JS-App/',
            languagesUsed: [JS, HTML, CSS, Bootstrap],
            phonePic: [pokemon_phone, pokemon]
        },
        {
            imgSrc: api,
            title: Texts[language].work.projects.api.title,
            description: Texts[language].work.projects.api.description,
            linkGit: 'https://github.com/alinalein/movie_api',
            linkLive: '',
            languagesUsed: [Node, Mongo, Express, Postman],
            phonePic: [postman]
        },
        {
            imgSrc: react,
            title: Texts[language].work.projects.react.title,
            description: Texts[language].work.projects.react.description,
            linkGit: 'https://github.com/alinalein/movie_api-client',
            linkLive: 'https://myflix-alinalein.netlify.app',
            languagesUsed: [Reacticon, Bootstrap, Redux, Saas],
            phonePic: [react_phone, react]
        },
        {
            imgSrc: meet,
            title: Texts[language].work.projects.meet.title,
            description: Texts[language].work.projects.meet.description,
            linkGit: 'https://github.com/alinalein/meet',
            linkLive: 'https://alinalein.github.io/meet/',
            languagesUsed: [Reacticon, Jest, AWS, Cucumber],
            phonePic: [meet_phone, meet]
        },
    ];

    const showDetails = (item) => {
        setActiveItem(item);
    };

    const onClose = () => {
        setActiveItem(null);
    };

    return (
        <motion.div id={id}
            className="floating-container"
            initial={isWidthGreaterThan1050 ? "hidden" : ""}
            animate={isWidthGreaterThan1050 ? "visible" : ""}
            variants={isWidthGreaterThan1050 ? variantsBig : {}}
        >
            <div className="content">
                <div className='component_title' >
                    <h2> <span className='span_title'>{Texts[language].work.title.charAt(0)}</span>
                        {Texts[language].work.title.slice(1)}</h2>
                </div>
                <div className='work_grid'>
                    {workItems.map(item => (
                        <div className='work_grid_item' key={item.title} onClick={() => showDetails(item)}>
                            <div className='work_img_div'>
                                <img className='work_img' src={item.imgSrc} alt={item.title} loading="lazy" />
                                <div className="portfolio-overlay"><p className='overlay_plus'>+</p></div>
                            </div>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
                {activeItem &&
                    <ProjectDetails onClose={onClose} language={language}
                        title={activeItem.title} description={activeItem.description}
                        languagesUsed={activeItem.languagesUsed} linkLive={activeItem.linkLive} linkGit={activeItem.linkGit}
                        phonePic={activeItem.phonePic} />
                }
            </div>
        </motion.div >
    );
}

export default Work;
