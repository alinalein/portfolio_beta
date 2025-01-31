
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import variantsBig from '../utils/variantsAnimation'
import Texts from '../utils/texts';
import ProjectDetails from './project_details'
import { useNavigate, useLocation } from 'react-router-dom';
// import API_Case from '../../assets/pdf/Case Study API.pdf'
// svg icons
// import Angular from '../../assets/svgs/Angular.svg'
// import Bootstrap from '../../assets/svgs/Bootstrap.svg'
// import CSS from '../../assets/svgs/CSS.svg'
// import Firebase from '../../assets/svgs/Firebase.svg'
// import HTML from '../../assets/svgs/HTML5.svg'
// import JS from '../../assets/svgs/JavaScript.svg'
// import Mongo from '../../assets/svgs/MongoDB.svg'
// import Node from '../../assets/svgs/Node_js.svg'
// import Reacticon from '../../assets/svgs/React.svg'
// import ReactNat from '../../assets/svgs/ReactNative.svg'
// import TS from '../../assets/svgs/Typescript.svg'
// import AWS from '../../assets/svgs/AWS.svg'
// import Jest from '../../assets/svgs/Jest.svg'
// import Cucumber from '../../assets/svgs/Cucumber.svg'
// import Postman from '../../assets/svgs/Postman.svg'
// import Express from '../../assets/svgs/Express.svg'
// import Redux from '../../assets/svgs/Redux.svg'
// import Saas from '../../assets/svgs/sass-1.svg'

import './work.scss'

const Work = ({ id, isWidthGreaterThan1050, language }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const [activeProject, setActiveProject] = useState(null);
    // get the project form the url params
    const urlParams = new URLSearchParams(location.search);
    const projectIdFromUrl = urlParams.get('project');

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
            id: 'angular-project',
            imgSrc: angular,
            title: Texts[language].work.projects.angular.title,
            description: Texts[language].work.projects.angular.description,
            features: Texts[language].work.projects.angular.features,
            linkGit: 'https://github.com/alinalein/myFlix-Angular-client',
            linkLive: 'https://alinalein.github.io/myFlix-Angular-client/welcome',
            // languagesUsed: [TS, Angular, Saas],
            languagesUsed: ['TypeScript', 'Angular', 'Angular Material', 'Sass', 'SCSS', 'HTML', 'TypeDoc'],
            phonePic: [angular_phone, angular]
        },
        {
            id: 'chat_project',
            imgSrc: chat_work,
            title: Texts[language].work.projects.chat.title,
            description: Texts[language].work.projects.chat.description,
            features: Texts[language].work.projects.chat.features,
            linkGit: 'https://github.com/alinalein/chat',
            // linkCase: '/case-study/chat',
            // languagesUsed: [ReactNat, Firebase],
            languagesUsed: ['Android Studio', 'React Native', 'Firebase', 'Firestore', 'GiftedChat', 'Expo'],
            phonePic: [chat_main_phone, chat_chat_phone]
        },
        {
            id: 'pokemon_project',
            imgSrc: pokemon,
            title: Texts[language].work.projects.pokemon.title,
            description: Texts[language].work.projects.pokemon.description,
            features: Texts[language].work.projects.pokemon.features,
            linkGit: 'https://github.com/alinalein/JS-App',
            linkLive: 'https://alinalein.github.io/JS-App/',
            // languagesUsed: [JS, HTML, CSS, Bootstrap],
            languagesUsed: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
            phonePic: [pokemon_phone, pokemon]
        },
        {
            id: 'api_project',
            imgSrc: api,
            title: Texts[language].work.projects.api.title,
            description: Texts[language].work.projects.api.description,
            features: Texts[language].work.projects.api.features,
            linkGit: 'https://github.com/alinalein/movie_api',
            linkCase: '/case-study/api',
            // languagesUsed: [Node, Mongo, Express, Postman],
            languagesUsed: ['Node.js', 'MongoDB', 'Express', 'Postman', 'HTML', 'Mongoose', 'JSDoc', 'CORS', 'JWT', 'Heroku'],
            phonePic: [postman]
        },
        {
            id: 'react_project',
            imgSrc: react,
            title: Texts[language].work.projects.react.title,
            description: Texts[language].work.projects.react.description,
            features: Texts[language].work.projects.react.features,
            linkGit: 'https://github.com/alinalein/movie_api-client',
            linkLive: 'https://myflix-alinalein.netlify.app',
            // languagesUsed: [Reacticon, Bootstrap, Redux, Saas],
            languagesUsed: ['React', 'React Bootstrap', 'Redux', 'Sass ', 'HTML', 'Parcel', 'Netlify'],
            phonePic: [react_phone, react]
        },
        {
            id: 'meet_project',
            imgSrc: meet,
            title: Texts[language].work.projects.meet.title,
            description: Texts[language].work.projects.meet.description,
            features: Texts[language].work.projects.meet.features,
            linkGit: 'https://github.com/alinalein/meet',
            linkLive: 'https://alinalein.github.io/meet/',
            // languagesUsed: [Reacticon, Jest, AWS, Cucumber],
            languagesUsed: ['AWS Lambda', 'Jest', 'Cucumber', 'Puppeteer', 'HTML', 'Sass', 'React', 'Google Calendar API', 'OAuth2', 'Recharts'],
            phonePic: [meet_phone, meet]
        },
    ];

    const showDetails = (project) => {
        setActiveProject(project);
        navigate(`?project=${project.id}`, { state: { from: location.pathname, activeProject: project } });
    };

    const onClose = () => {
        setActiveProject(null); // Clear state
        navigate('/#work'); // Navigate only after state updates
    };

    // Handle query parameter of project on initial load of page
    useEffect(() => {
        if (projectIdFromUrl) {
            const project = workItems.find((item) => item.id === projectIdFromUrl);
            if (project) {
                setActiveProject(project);
            }
        }
    }, [projectIdFromUrl]);


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
                    {workItems.map(project => (
                        <div className='work_grid_item' key={project.title} onClick={() => showDetails(project)}>
                            <div className='work_img_div'>
                                <img className='work_img' src={project.imgSrc} alt={project.title} loading="lazy" />
                                <div className="portfolio-overlay"><p className='overlay_plus'>+</p></div>
                            </div>
                            <p>{project.title}</p>
                        </div>
                    ))}
                </div>
                <div className="scrollable_images_container">
                    {activeProject &&
                        <ProjectDetails onClose={onClose} language={language}
                            title={activeProject.title} description={activeProject.description} features={activeProject.features}
                            languagesUsed={activeProject.languagesUsed} linkLive={activeProject.linkLive} linkGit={activeProject.linkGit}
                            phonePic={activeProject.phonePic} linkCase={activeProject.linkCase} activeProject={activeProject} id={activeProject.id} />
                    }
                </div>
            </div>
        </motion.div >
    );
}

export default Work;
