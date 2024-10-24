const Texts = {
    en: {
        navigation: {
            ABOUT: 'About',
            WORK: 'Work',
            CONTACT: 'Contact',
            DE: 'GER'
        },
        greeting: "Hello I'm Alina",
        work: {
            title: "Work",
            projects: {
                angular: {
                    title: "Angular myFlix",
                    description: "This is the Angular frontend for the Movie_API backend project. The app will feature multiple interface views to interact with data via the REST API endpoints defined in the Movie_API server-side application."
                },
                chat: {
                    title: "React Native Chat",
                    description: "This app is designed for mobile devices using React Native. It provides users with a chat interface and options to chat, share images, share audios and their location."
                },
                pokemon: {
                    title: "JavaScript Pokédex",
                    description: "This small application fetches data about Pokémon from an external API. It displays details about a Pokémon when its modal is clicked and allows the user to search for a specific Pokémon by name."
                },
                api: {
                    title: "Node.JS Movie_API",
                    description: "This API gives users access to details about various movies, directors and genres. Users will be able to sign up, update their personal information, delete their profile and create a list of their favorite movies."
                },
                react: {
                    title: "React myFlix",
                    description: "This is the React frontend for the Movie_API backend project. The application incorporates multiple interface views to manage data through REST API endpoints defined in the Movie_API server-side application."
                },
                meet: {
                    title: "React PWA Meet",
                    description: "The application is designed for event management using React and a test-driven development approach. It is a serverless and progressive web app that fetches upcoming events through the Google Calendar API."
                }
            }
        },
        project_details: "Technologies",
        about: {
            title: "About me",
            welcomeText: "Welcome to my page! I am Alina, a  freshly certified Full-Stack Web Developer living all over the world but mostly in Berlin.🖤",
            description: "I enjoy exploring new places and challenging myself with activities like escape rooms, skydiving, and hiking unfamiliar trails. \
            I bring the same curiosity, determination, and problem-solving mindset to my coding projects, where I apply my skills in HTML, CSS, JavaScript, React, Node.js, and debugging.",
            skillsTitle: "Skills & Technologies",
            whyCodingTitle: "Why coding?",
            whyCodingText: "Working in a SaaS company in customer-focused roles sparked my interest in web development. \
            As a Customer Success Manager, I frequently troubleshot software issues and acted as an intermediary. \
            Wanting to improve efficiency and contribute more directly, I took the initiative and began teaching myself coding two years ago. \
            I quickly became fascinated by it and enrolled in a formal course, driven by a desire to keep learning. \
            \n\nMy coding journey is fueled by a passion for creating user-friendly experiences, I enjoy every aspect of building interactive apps—from front-end to back-end development.\
            I find the debugging process especially thrilling, it feels like detective work, solving puzzles and uncovering the root cause of issues. \
            \n\nI'm excited to finally transition my career into the field I would love to work in—coding!"
        },
        contact: {
            formTitle: "Contact Form",
            getInTouchTitle: "Get in touch",
            namePlaceholder: "Full Name",
            emailPlaceholder: "Email Address",
            messagePlaceholder: "Your Message",
            sendMessageButton: "SEND MESSAGE",
            successMessage: "You successfully sent your message",
            errorMessage: "Unfortunately, your message could not be sent. Please try again.",
        }
    },
    de: {
        navigation: {
            ABOUT: 'Über mich',
            WORK: 'Projekte',
            CONTACT: 'Kontakt',
            DE: 'DE'
        },
        greeting: "Hallo, ich bin Alina",
        work: {
            title: "Projekte",
            projects: {
                angular: {
                    title: "Angular myFlix",
                    description: "Dies ist das Angular-Frontend für das Movie_API-Backend-Projekt. Die App bietet verschiedene Interface-Ansichten, um mit Daten über die in der Movie_API-Server-Anwendung definierten REST-API-Endpunkte zu interagieren."
                },
                chat: {
                    title: "React Native Chat",
                    description: "Diese App wurde für mobile Geräte mit React Native entwickelt. Sie bietet Usern eine Chat-Oberfläche und Optionen zum Chatten, Teilen von Bildern, Audios und ihrem Standort."
                },
                pokemon: {
                    title: "JavaScript Pokédex",
                    description: "Diese kleine Anwendung ruft Daten über Pokémon von einer externen API ab. Sie zeigt Details zu einem Pokémon an, wenn dessen Modal angeklickt wird, und ermöglicht es dem User, nach einem bestimmten Pokémon zu suchen."
                },
                api: {
                    title: "Node.JS Movie_API",
                    description: "Diese API gibt Usern Zugriff auf Details zu verschiedenen Filmen, Regisseuren und Genres. User können sich anmelden, ihre persönlichen Informationen aktualisieren, ihr Profil löschen und eine Liste ihrer Lieblingsfilme erstellen."
                },
                react: {
                    title: "React myFlix",
                    description: "Dies ist das React-Frontend für das Movie_API-Backend-Projekt. Die Anwendung bietet mehrere Interface-Ansichten, um Daten über die in der Movie_API-Serveranwendung definierten REST-API-Endpunkte zu verwalten."
                },
                meet: {
                    title: "React PWA Meet",
                    description: "Die Anwendung ist für das Eventmanagement mit React und einem testgetriebenen Entwicklungsansatz ausgelegt. Es ist eine serverlose und progressive Web-App, die bevorstehende Ereignisse über die Google Calendar API abruft."
                }
            }
        },
        project_details: "Technologien",
        about: {
            title: "Über mich",
            welcomeText: "Willkommen auf meiner Seite! Ich bin Alina, kürzlich zertifizierte Full-Stack Web Developer, ich lebe überall auf der Welt, habe aber meinen Hauptsitz in Berlin.🖤",
            description: "Ich entdecke gerne neue Orte und stelle mich Herausforderungen wie Escape Rooms, Fallschirmspringen oder Wanderungen auf unbekannten Pfaden. \
            Diese Neugier und Entschlossenheit, kombiniert mit meinem lösungsorientierten Ansatz, bringe ich auch in meine Coding-Projekte ein, \
             in denen ich meine Fähigkeiten in HTML, CSS, JavaScript, React, Node.js und Debugging einsetze.",
            skillsTitle: "Skills & Technologien",
            whyCodingTitle: "Warum Coding?",
            whyCodingText: "Durch meine Tätigkeit in einem SaaS-Unternehmen in einer kundenorientierten Rolle wurde mein Interesse an Coding geweckt.\
            Als Customer Success Manager habe ich häufig beim Lösen von Softwareproblemen als Vermittlerin agiert. \
            Ich wollte aktiver zur Lösung beitragen und den gesamten Prozess beschleunigen, deshalb habe ich vor zwei Jahren begonnen, mir das Programmieren selbst beizubringen.\
            Schon bald war ich davon so fasziniert, dass ich mich zu einem formalen Kurs anmeldete, um noch mehr darüber zu lernen. \
             \n\nHeute macht es mir besonders Spaß, interaktive Apps und Webseiten zu entwickeln – von der Frontend- bis zur Backend-Entwicklung. \
             Der Debugging-Prozess macht mir besonders Spaß, denn er fühlt sich für mich an wie Detektivarbeit, Probleme analysieren, Lösungen finden und die Ursachen aufdecken. \
             \n\nIch freue mich darauf, meine Karriere nun ganz auf den Bereich auszurichten, der mich begeistert – das Programmieren!"


        },
        contact: {
            formTitle: "Kontaktformular",
            getInTouchTitle: "Melde dich gerne bei mir",
            namePlaceholder: "Vollständiger Name",
            emailPlaceholder: "E-Mail-Adresse",
            messagePlaceholder: "Ihre Nachricht",
            sendMessageButton: "NACHRICHT SENDEN",
            successMessage: "Ihre Nachricht wurde erfolgreich gesendet",
            errorMessage: "Leider konnte Ihre Nachricht nicht gesendet werden. Bitte versuchen Sie es erneut.",
        }
    }
};

export default Texts;
