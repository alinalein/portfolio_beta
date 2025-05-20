import Texts, { Language } from '../../../shared/utils/texts';
import meet from '../assets/img/meet.png';
import meet_phone from '../assets/img/react_meet-phone.png';

import chat_work from '../assets/img/chat_work.png';
import chat_main_phone from '../assets/img/chat_main.png';
import chat_chat_phone from '../assets/img/chat_chat.png';

import angular from '../assets/img/myFlix_Angular.png';
import angular_phone from '../assets/img/angular_phone_main.png';

import pokemon from '../assets/img/pokemon.png';
import pokemon_phone from '../assets/img/js_pokemon-phone.png';

import api from '../assets/img/api.png';
import postman from '../assets/img/postman.png';

import react from '../assets/img/myFlix_React.png';
import react_phone from '../assets/img/myFlix_react_main_phone.png';

import { WorkItem } from '../../../types/work';

const getWorkItems = (language: Language): WorkItem[] => {

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
            images: [angular_phone, angular]
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
            images: [chat_main_phone, chat_chat_phone]
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
            images: [pokemon_phone, pokemon]
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
            images: [postman]
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
            images: [react_phone, react]
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
            images: [meet_phone, meet]
        },
    ];
    return workItems;
}
export default getWorkItems;