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
                    description: "This is the Angular frontend for the Movie_API backend project. \
                    The application provides multiple interface views and allows users to interact with data through the REST API endpoints defined in the Movie_API server.",
                    features: ['Welcome Screen: Allows users to log in or register a new account.',
                        'Movie List View: Shows a complete list of movies for authenticated users, with options to add or remove movies from their favorites list.',
                        'Movie Cards: Each movie card in the list includes buttons to view detailed information about the movie, explore its genre, or learn about the director.',
                        'Profile View: Enables users to view and update their personal information, with an option to deregister. Users can also view their favorite movies here.',
                        'Navigation: Icons for Profile, All Movies, and Logout.'
                    ]
                },
                chat: {
                    title: "React Native Chat",
                    description: "This app is designed for mobile devices using React Native. It provides users with a chat interface and options to chat, share images, share audios and their location.",
                    features: [
                        'Customization page where users can enter their name and select a chat background color before joining the chat.',
                        'Chat screen with real-time conversation display, message input, and send button.',
                        'Communication options allow users to send images (from the library or camera), voice messages, and share their location.',
                        'Anonymous authentication through Google Firebase. Data storage via Google Firestore Database supports both online and offline access.']
                },
                pokemon: {
                    title: "JavaScript Pokédex",
                    description: "This small application fetches data about Pokémon from an external API. It displays details about a Pokémon when its modal is clicked and allows the user to search for a specific Pokémon by name.",
                    features: ['Fetch and display data on Pokémon from an external API.',
                        'Show a list of items for the user to browse.',
                        'Allow users to search for specific items by name through a search bar.',
                        'Let users click on any item to view more details about it.',
                        'Allow users to filter items by selecting a generation from a dropdown menu.']
                },
                api: {
                    title: "Node.JS Movie_API",
                    description: "This API serves as the back end for React and Angular frontends, providing users access to details about various movies, directors, and genres. Users can sign up, update their personal information, delete their profile, and create a list of favorite movies.",
                    features: ['Provide a list of all movies.',
                        'Retrieve detailed information about a specific movie, genre, or director.',
                        'Allow new users to sign up and manage their account info.',
                        'Enable users to add or remove movies from their favorites.',
                        'Allow users to delete their account.']
                },
                react: {
                    title: "React myFlix",
                    description: "This is the React frontend for the Movie_API backend project. The application incorporates multiple interface views to manage data through REST API endpoints defined in the Movie_API server-side application.",
                    features: [
                        'Welcome Screen: Allows users to log in or register a new account.',
                        'Movie List View: Displays movies with images and titles, includes genre filtering, title search, and options to add or remove favorites.',
                        'Movie Details: Shows full movie information with options to add or remove the movie from the favorites list.',
                        'Profile View: Enables users to view and update personal information, with an option to deregister.',
                        'Navigation: Provides access to Home, Genres, My List, Profile, and Logout.'
                    ]
                },
                meet: {
                    title: "React PWA Meet",
                    description: "The application is designed for event management using React and a test-driven development approach. It is a serverless and progressive web app that fetches upcoming events through the Google Calendar API.",
                    features: [
                        'Event filter to select a city and view location-specific events.',
                        'Event display options to show or hide details for a streamlined view.',
                        'Setting to adjust the number of events shown on the screen.',
                        'Offline access to previously saved event details.',
                        'Home screen shortcut for quick app access.',
                        'Data visualizations with charts to gain event insights.'
                    ]
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
            backgroundTitle: "My background",
            backgroundText: "With over five years of experience in Sales and Customer Success, primarily in the SaaS industry, \
            I have spent the past three years as a Customer Success Manager, handling sensitive CRM data and working closely with product teams to improve our software.\
            I contribute to CRM data documentation, assist in troubleshooting software issues for clients through cross-functional teamwork, and enjoy brainstorming with my team to boost the customer experience.\
             \n\nThrough this role, I have gained a solid understanding of user needs, software functionality, and the importance of clear, effective communication between technical and non-technical teams, all while strengthening my problem-solving skills.",
            whyCodingTitle: "Why coding?",
            whyCodingText: "**Working in a SaaS company** in customer-focused roles sparked my interest in web development. \
            As a Customer Success Manager, I frequently troubleshot software issues and acted as an intermediary. \
            Wanting to improve efficiency and contribute more directly, I took the initiative and began teaching myself coding two years ago. \
            I quickly became fascinated by it and enrolled in a formal course as a Full Stack Web Developer course at CareerFoundry, driven by a desire to keep learning. \
            \n\n**My coding journey** is fueled by a passion for creating user-friendly experiences, I enjoy every aspect of building interactive apps—from front-end to back-end development.\
            I find the debugging process especially thrilling, it feels like detective work, solving puzzles and uncovering the root cause of issues. \
             \n\n**As a web developer**, I prioritize writing clean, well-structured code and building layouts that are both visually appealing and efficient, designed to perform seamless on any device. \
            I create interfaces that are easy to use and accessible, making sure every user can navigate smoothly and have a great experience. Just as I guided customers to success in my current role,  I now aim to guide users through digital interfaces with ease. \
            \n\nI'm excited to finally transition my career into the field I would love to work in and make a meaningful impact—**coding**!"
        },
        contact: {
            formTitle: "Get in touch",
            getInTouchTitle: "Let’s connect!",
            formMessage: "I’m based in Berlin and excited about inspiring remote positions—whether part-time, full-time, or freelance.\
             Feel free to reach out via the contact form or simply email me at ",
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
                    description: "Dies ist das Angular-Frontend für das Movie_API-Backend-Projekt. Die App bietet verschiedene Interface-Ansichten, um mit Daten über die in der Movie_API-Server-Anwendung definierten REST-API-Endpunkte zu interagieren.",
                    features: []
                },
                chat: {
                    title: "React Native Chat",
                    description: "Diese App wurde für mobile Geräte mit React Native entwickelt. Sie bietet Usern eine Chat-Oberfläche und Optionen zum Chatten, Teilen von Bildern, Audios und ihrem Standort.",
                    features: []
                },
                pokemon: {
                    title: "JavaScript Pokédex",
                    description: "Diese kleine Anwendung ruft Daten über Pokémon von einer externen API ab. Sie zeigt Details zu einem Pokémon an, wenn dessen Modal angeklickt wird, und ermöglicht es dem User, nach einem bestimmten Pokémon zu suchen.",
                    features: []
                },
                api: {
                    title: "Node.JS Movie_API",
                    description: "Diese API gibt Usern Zugriff auf Details zu verschiedenen Filmen, Regisseuren und Genres. User können sich anmelden, ihre persönlichen Informationen aktualisieren, ihr Profil löschen und eine Liste ihrer Lieblingsfilme erstellen.",
                    features: []
                },
                react: {
                    title: "React myFlix",
                    description: "Dies ist das React-Frontend für das Movie_API-Backend-Projekt. Die Anwendung bietet mehrere Interface-Ansichten, um Daten über die in der Movie_API-Serveranwendung definierten REST-API-Endpunkte zu verwalten.",
                    features: []
                },
                meet: {
                    title: "React PWA Meet",
                    description: "Die Anwendung ist für das Eventmanagement mit React und einem testgetriebenen Entwicklungsansatz ausgelegt. Es ist eine serverlose und progressive Web-App, die bevorstehende Ereignisse über die Google Calendar API abruft.",
                    features: []
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
            backgroundTitle: "Werdegang",
            backgroundText: "",
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
            formTitle: "Melde dich gerne bei mir",
            getInTouchTitle: "Lass uns in Kontakt bleiben!",
            formMessage: "Ich bin in Berlin ansässig und freue mich auf inspirierende Remote-Positionen – ob Teilzeit, Vollzeit oder freiberuflich. Schreib mir einfach über das Kontaktformular oder schick mir direkt eine E-Mail an ",
            namePlaceholder: "Vollständiger Name",
            emailPlaceholder: "E-Mail-Adresse",
            messagePlaceholder: "Nachricht",
            sendMessageButton: "NACHRICHT SENDEN",
            successMessage: "Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.",
            errorMessage: "Leider konnte deine Nachricht nicht gesendet werden. Bitte versuche es erneut.",
        }
    }
};

export default Texts;
