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
                    description: "This is the Angular frontend for the Movie_API backend project. The app will feature multiple interface views to interact with data via the REST API endpoints defined in the Movie_API server-side application.",
                    features: []
                },
                chat: {
                    title: "React Native Chat",
                    description: "This app is designed for mobile devices using React Native. It provides users with a chat interface and options to chat, share images, share audios and their location.",
                    features: []
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
                    description: "This API gives users access to details about various movies, directors and genres. Users will be able to sign up, update their personal information, delete their profile and create a list of their favorite movies.",
                    features: ['Provide a list of all movies.', 'Retrieve detailed information about a specific movie, genre, or director.',
                        'Allow new users to sign up and manage their account info.', 'Enable users to add or remove movies from their favorites.', 'Allow users to delete their account.']
                },
                react: {
                    title: "React myFlix",
                    description: "This is the React frontend for the Movie_API backend project. The application incorporates multiple interface views to manage data through REST API endpoints defined in the Movie_API server-side application.",
                    features: [
                        'Movie List: Displays movies with images and titles, allows genre filtering, title search, and adding/removing favorites.',
                        'Movie Details: Shows full movie info with options to add/remove favorites.',
                        'Authentication: Login and signup with user details.',
                        'Profile: View and update user info, with an option to deregister.',
                        'Navigation: Simple navigation with logout; manage favorites in List, Details, and My List views.'
                    ]
                },
                meet: {
                    title: "React PWA Meet",
                    description: "The application is designed for event management using React and a test-driven development approach. It is a serverless and progressive web app that fetches upcoming events through the Google Calendar API.",
                    features: [
                        'Filter events by city to view only those happening in a specific location.',
                        'Show or hide event details as needed for a cleaner view.',
                        'Set the number of events displayed on the screen at once.',
                        'Use the app offline, with access to saved event details.',
                        'Add a shortcut to the app on your home screen for quick access.',
                        'View charts that visualize event data for better insights.'
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
            backgroundTitle: "Some background info",
            backgroundText: " Böa balsl ",
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
            backgroundTitle: "",
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
