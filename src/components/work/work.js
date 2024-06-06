import React, { useState } from 'react';
import { motion } from 'framer-motion';
import variants from '../utils/variantsAnimation'
import ProjectDetails from './project_details'

// svg icons
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

// project pictures 
import chat_work from '../../assets/img/chat_work.png'
import chat_main from '../../assets/img/chat_main.png'
import chat_chat from '../../assets/img/chat_chat.png'

import angular from '../../assets/img/myFlix_Angular.png'
import angular_main from '../../assets/img/angular_phone_main.png'

import pokemon from '../../assets/img/pokemon.png'

import api from '../../assets/img/api.png'

import react from '../../assets/img/myFlix_React.png'

import meet from '../../assets/img/meet.png'


const Work = ({ id, isWidthGreaterThan1050 }) => {
    const [activeItem, setActiveItem] = useState(null);

    const workItems = [
        {
            imgSrc: angular, title: "Angular myFlix",
            description: "This is the Angular frontend for the Movie_API backend project. The app will feature multiple interface views to interact with data via the REST API endpoints defined in the Movie_API server-side application.",
            linkGit: 'https://github.com/alinalein/myFlix-Angular-client', linkLive: 'https://alinalein.github.io/myFlix-Angular-client/welcome', languagesUsed: [ReactNat, SQL, Mongo], phonePic: [angular_main, angular]
        },
        {
            imgSrc: chat_work, title: "React Native Chat",
            description: "This app is designed for mobile devices using React Native. It provides users with a chat interface and options to chat, share images, share audios and their location.",
            linkGit: 'https://github.com/alinalein/chat', linkLive: '', languagesUsed: [ReactNat, Reacticon], phonePic: [chat_main, chat_chat]
        },
        {
            imgSrc: pokemon, title: "JavaScript Pokédex",
            description: "This small application fetches data about Pokémon from an external API. It displays details about a Pokémon when its modal is clicked and allows the user to search for a specific Pokémon by name.",
            linkGit: 'https://github.com/alinalein/JS-App', linkLive: 'https://alinalein.github.io/JS-App/', languagesUsed: [], phonePic: [pokemon]
        },
        {
            imgSrc: api, title: "Node.JS Movie_API",
            description: "This API gives users access to details about various movies, directors and genres. Users will be able to sign up, update their personal information, delete their profile and create a list of their favorite movies.",
            linkGit: 'https://github.com/alinalein/movie_api', linkLive: '', languagesUsed: [], phonePic: [api]
        },
        {
            imgSrc: react, title: "React myFlix",
            description: "This is the React frontend for the Movie_API backend projectThe application will incorporate multiple interface views to manage data through the REST API endpoints defined in the Movie_API server-side application.",
            linkGit: 'https://github.com/alinalein/movie_api-client', linkLive: 'https://myflix-alinalein.netlify.app', languagesUsed: [], phonePic: [react]
        },
        {
            imgSrc: meet, title: "React PWA Meet",
            description: "The application is designed for event management, using React and a test-driven development approach. It is a serverless and progressive web app, that fetches upcoming events through the Google Calendar API.",
            linkGit: 'https://github.com/alinalein/meet', linkLive: 'https://alinalein.github.io/meet/', languagesUsed: [], phonePic: [meet]
        },
    ];

    const showDetails = (item) => {
        setActiveItem(item);
        // document.body.style.overflow = 'hidden';
    };

    const onClose = () => {
        setActiveItem(null);
        // document.body.style.overflow = 'auto';
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
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
                {activeItem &&
                    <ProjectDetails onClose={onClose}
                        title={activeItem.title} description={activeItem.description}
                        languagesUsed={activeItem.languagesUsed} linkLive={activeItem.linkLive} linkGit={activeItem.linkGit}
                        phonePic={activeItem.phonePic} />
                }
            </div>
        </motion.div >
    );
}

export default Work;
