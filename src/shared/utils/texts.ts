const Texts = {
    en: {
        navigation: {
            ABOUT: 'About',
            WORK: 'Work',
            CONTACT: 'Contact',
            DE: 'GER'
        },
        greeting: "Hello, I'm Alina",
        work: {
            title: "Work",
            projects: {
                angular: {
                    title: "Angular myFlix",
                    description: `This is the Angular front-end for the Movie_API back-end project. 
                    The application includes multiple interface views, enabling users to interact with data through REST API endpoints defined in the Movie_API server.`,
                    features: ['Welcome Screen: Allows users to log in or register a new account.',
                        'Movie List View: Shows a complete list of movies for logged-in users.',
                        'Movie Cards: Each movie card in the list includes buttons to view detailed information about the movie, explore its genre, or learn about the director. Users can add or remove movies from their favorites list here.',
                        'Profile View: Enables users to view and update their personal information with an option to deregister. Users can also view their favorite movies here.',
                        'Navigation: Icons for Profile, All Movies, and Logout.'
                    ]
                },
                chat: {
                    title: "React Native Chat",
                    description: "This app is designed for mobile devices using React Native. It offers users a chat interface with options to chat, share images, audio files, and location.",
                    features: [
                        'Customization Page where users can enter their name and select a chat background color before joining the chat.',
                        'Chat screen with real-time conversation display, message input, and send button.',
                        'Communication options allow users to send images (from the library or camera), voice messages, and share their location.',
                        'Anonymous authentication through Google Firebase. Data is stored in Google Firestore Database, available both online and offline.']
                },
                pokemon: {
                    title: "JavaScript Pokédex",
                    description: "This small application fetches data about Pokémon from an external API. It displays details about a Pokémon when its modal is clicked and allows the user to search for a specific Pokémon by name.",
                    features: ['Fetch and display data on Pokémon from an external API.',
                        'Show a list of items for the user to browse.',
                        'Allows users to search for specific items by name using a search bar.',
                        'Let users click on any item to view more details about it.',
                        'Allow users to filter items by selecting a generation from a dropdown menu.']
                },
                api: {
                    title: "Node.JS Movie_API",
                    description: "This API serves as the back end for React and Angular front-ends, providing users access to details about various movies, directors, and genres. Users can sign up, update their personal information, delete their profile, and create a list of favorite movies.",
                    features: ['Provides a list of all movies stored in the database.',
                        'Retrieve detailed information about a specific movie, genre, or director.',
                        'Allow new users to sign up and manage their account info.',
                        'Enable users to add or remove movies from their favorites.',
                        'Allow users to delete their account.']
                },
                react: {
                    title: "React myFlix",
                    description: `This is the React front-end for the Movie_API back-end project. 
                    The application includes multiple interface views, enabling users to interact with data through REST API endpoints defined in the Movie_API server.`,
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
                    description: "This application is built for event management using React and a test-driven development approach. It is a serverless and progressive web app that fetches upcoming events through the Google Calendar API.",
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
            welcomeText: "Welcome to my page! I am Alina, a newly certified Full-Stack Web Developer living all over the world but mostly in Berlin.🖤",
            description: `I enjoy exploring new places and challenging myself with activities like escape rooms, skydiving and hiking unfamiliar trails. 
            I bring the same curiosity, determination, and problem-solving mindset to my coding projects, where I apply my skills in HTML, CSS, JavaScript, React, TypeScript, Node.js, and debugging.`,
            skillsTitle: "Skills & Technologies",
            backgroundTitle: "My background",
            backgroundText: `With over five years of experience in Sales and Customer Success, primarily in the SaaS industry, 
            I have spent the past three years as a Customer Success Manager, handling sensitive CRM data and working closely with product teams to improve our software.
            I contribute to CRM data documentation, assist in troubleshooting software issues for clients through cross-functional teamwork, and enjoy brainstorming with my team to boost the customer experience.
            Additionally, I have two years of experience in software troubleshooting and three years in digital solutions, which have helped me build solid technical expertise.
             \n\nThrough this role, I have gained a solid understanding of user needs, software functionality, and the importance of clear, effective communication between technical and non-technical teams, all while strengthening my problem-solving skills.`,
            whyCodingTitle: "Why coding?",
            whyCodingText: `**Working in a SaaS company** in a customer-focused role sparked my interest in web development. 
            As a Customer Success Manager, I often assisted in troubleshooting software issues and acted as an intermediary. 
            Wanting to improve efficiency and contribute more directly, I took the initiative and began teaching myself coding two years ago. 
            I quickly became fascinated by it and enrolled in a Full Stack Web Developer course at CareerFoundry, driven by a desire to keep learning. 
            \n\n**My coding journey** is fueled by a passion for creating user-friendly experiences, I enjoy every aspect of building interactive apps—from front-end to back-end development.
            I find the debugging process especially thrilling, it feels like detective work, solving puzzles and uncovering the root cause of issues. 
             \n\n**As a web developer**, I prioritize writing clean, well-structured code and building layouts that are both visually appealing and efficient, designed to perform seamlessly on any device.
            I create interfaces that are easy to use and accessible, making sure every user can navigate smoothly and have a great experience. Just as I guided customers to success in my current role, I now aim to guide users through digital interfaces with ease. 
            \n\nI'm excited to finally transition my career into the field I would love to work in and make a meaningful impact—**coding**!`
        },
        contact: {
            formTitle: "Get in touch",
            getInTouchTitle: "Let’s connect!",
            formMessage: `I’m based in Berlin and excited about inspiring remote positions—whether part-time, full-time, or freelance.
             Feel free to reach out via the contact form or simply email me at:`,
            namePlaceholder: "Full Name",
            emailPlaceholder: "Email Address",
            messagePlaceholder: "Your Message",
            sendMessageButton: "SEND MESSAGE",
            successMessage: "You successfully sent your message",
            errorMessage: "Unfortunately, your message could not be sent. Please try again.",
        },
        impressum: {
            information: "Information in accordance with § 5 TMG:",
            register: "There is no entry in the Commercial Register.",
            email: "Email:"
        },
        case_api: {
            title: "Case Study Movie_API",
            overview: {
                purpose_and_context: {
                    title: "PURPOSE AND CONTEXT",
                    description: `The challenge was to create the API and database from
scratch while ensuring a seamless connection between them.`
                },
                project_duration: {
                    title: "PROJECT DURATION",
                    description: `The project was completed in about four weeks, with each week dedicated to a different stage 
                    (server setup, database creation, API implementation, and cloud deployment)`
                },
                objective: {
                    title: "OBJECTIVE",
                    description: `The goal was to create a secure and efficient RESTful API that lets users manage profiles, 
                    favorite movies, and explore film details, while being secure and efficient.`
                },
            },
            rest_api: {
                p: "A REST API is like a messenger between two different systems that lets them communicate.",
                client: "CLIENT",
                request: "REQUEST",
                server: "SERVER",
                response: "RESPONSE",
                database: "DATABASE"
            },
            crud: {
                introduction: `CRUD stands for Create, Read, Update, and Delete. These four operations allow data to be added, 
                viewed, changed, or removed from the database in software applications. This is used when building API endpoints.`,
                action: "CRUD IN ACTION",
                description: "The documentation is always there to show how the endpoint that calls a CRUD operation is structured:"
            },
            mongodb: {
                tag: "Mongo Database",
                introduction_1: `In a software application, a database is used to store all kinds of information, 
                like  product catalogs.`,
                introduction_2: "A MongoDB database stores this data in an easy-to-read format, similar to a list:",
            },
            access_control: {
                tag: "Authentication",
                overview: {
                    authentication_title: "AUTHENTICATION",
                    authentication: `Basic HTTP authentication securely sends login details in the header, 
                    and the API verifies them with the database to log the user in.`,
                    authorization_title: "AUTHORIZATION",
                    authorization: "If the username and password are correct, the app generates a secure token. This token is sent with each request and is required to access the app.",
                    security_title: "SECURITY",
                    security: `The movie API uses password hashing, converting passwords into secret codes before storing them. 
                    Even if the database is hacked, the real passwords stay hidden and only the user knows them.`
                }
            },
            testing: {
                tag: "Debugging",
                introduction_1: "Postman is a tool that helps developers test how their web servers handle requests and responses.",
                introduction_2: "It’s like a digital assistant that helps you make sure everything is communicating properly.",
                error: "Error",
                detects: "Postman detects it",
                solution: "Solution"
            },
            challenges: {
                tag: "Challenges",
                overview: {
                    strategic_title: "Strategic Debugging Across Stack Layers",
                    strategic: `Encountering unexpected behavior in both frontend and backend flows, I relied on dev tools, 
                                        structured console.log outputs, and try/catch blocks to isolate root causes.`,
                    implementing_title: "Implementing Access Control for User Data Integrity",
                    implementing: "To prevent unauthorized data modifications, I implemented strict user validation by comparing the authenticated user token with route parameters:",
                    resolving_title: "Resolving Cross-Framework API Compatibility Issues",
                    resolving: `While integrating Angular, I discovered that JSON structures acceptable to React were triggering client-side errors.
                                I analyzed the response payloads, adjusted formatting and structure, and implemented conditional response logic to 
                                support consistent behavior across multiple frontend frameworks.`
                }
            },
            final_conclusions: {
                tag: "Final Conclusion",
                looking_title: "Looking back",
                looking_text: `I learned how to build secure, reliable APIs from scratch, with a strong focus on clean architecture 
                                and error handling. The biggest takeaway: good error handling and attention to detail can prevent most bugs. 
                                I also really enjoyed the problem-solving process—it felt like detective work.`,
                future_title: "In the future",
                future_text: `In the future, I’d like to add a password reset feature and OAuth login to improve usability. 
                                I'd also add user comments and ratings to enhance interaction and overall user experience.`
            },
            back_button: "Go Back"
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
                    description: "Dies ist das Angular-Front-End für das Movie_API-Back-End-Projekt. Die App bietet verschiedene Interface-Ansichten und ermöglicht es Usern über die REST-API-Endpunkte des Movie_API-Servers auf die Daten in der Datenbank zuzugreifen.",
                    features: [
                        'Willkommensseite: User können sich anmelden oder ein neues Konto erstellen.',
                        'Filmliste: Zeigt alle Filme für angemeldete User an.',
                        'Filmkarten: Jede Filmkarte enthält Buttons, um Infos zum Film, Genre oder Regisseur anzusehen. Zusätzlich können User hier Filme zur Favoritenliste hinzufügen oder entfernen',
                        'Profilseite: User können ihre Daten ansehen und aktualisieren oder ihr Profil löschen. Ebenso sind hier die Lieblingsfilme des jeweiligen Users gelistet.',
                        'Navigation: Icons für Profil, alle Filme und zum Abmelden aus dem Profil.'
                    ]
                },
                chat: {
                    title: "React Native Chat",
                    description: "Diese React Native-App wurde für mobile Geräte entwickelt und bietet Usern eine einfache Chat-Oberfläche mit Optionen zum Chatten, Teilen des Standorts sowie zum Senden von Bildern und Audios.",
                    features: [
                        'Startseite: User können ihren Namen eingeben und eine Hintergrundfarbe für den Chat auswählen, bevor sie beitreten.',
                        'Chatbildschirm: Zeigt die Unterhaltung in Echtzeit an und bietet ein Eingabefeld sowie einen Sende-Button.',
                        'Kommunikationsoptionen: User können Bilder (aus der Bibliothek oder Kamera), Sprachnachrichten und ihren Standort teilen.',
                        'Anonyme Authentifizierung über Google Firebase, mit Speicherung der Daten in der Google Firestore-Datenbank, verfügbar sowohl online als auch offline.'
                    ]
                },
                pokemon: {
                    title: "JavaScript Pokédex",
                    description: "Diese App ruft Pokémon-Daten über eine externe API ab und zeigt Details zu einem Pokémon an, wenn dessen Modalfenster angeklickt wird. User können gezielt nach einem bestimmten Pokémon anhand des Namens suchen.",
                    features: [
                        'Pokémon-Daten werden über eine externe API abgerufen und angezeigt.',
                        'Eine Liste der Pokémon wird dem User zur Verfügung gestellt.',
                        'Ermöglicht die gezielte Suche nach Pokémon über eine Suchleiste.',
                        'User können auf ein beliebiges Pokémon klicken, um weitere Details zu sehen.',
                        'User können Pokémon nach Generation über ein Dropdown-Menü filtern.'
                    ]
                },
                api: {
                    title: "Node.JS Movie_API",
                    description: "Diese API dient als Back-End für React- und Angular-Front-Ends. User erhalten Zugriff auf eine Übersicht zu Filmen, Regisseuren, Genres und Filmbeschreibungen. Sie können sich registrieren, ihre persönlichen Daten aktualisieren, ihr Profil löschen und eine Liste ihrer Lieblingsfilme erstellen.",
                    features: [
                        'Zeigt eine Liste aller Filme in der Datenbank an.',
                        'Ermöglicht das Abrufen detaillierter Informationen zu einem bestimmten Film, Genre oder Regisseur.',
                        'Neue User können sich registrieren, bestehende User sich einloggen und ihre Kontoinformationen verwalten.',
                        'User können Filme zur Favoritenliste hinzufügen oder daraus entfernen.',
                        'User haben die Möglichkeit, ihr Konto zu löschen.'
                    ]
                },
                react: {
                    title: "React myFlix",
                    description: "Dies ist das React-Front-End für das Movie_API-Back-End-Projekt. Die App bietet verschiedene Interface-Ansichten und ermöglicht es Usern über die REST-API-Endpunkte des Movie_API-Servers auf die Daten in der Datenbank zuzugreifen.",
                    features: [
                        'Willkommensseite: User können sich anmelden oder ein neues Konto erstellen.',
                        'Filmliste: Zeigt alle Filme für angemeldete User an, bietet Filteroptionen nach Genre, eine Titelsuche sowie Optionen zum Hinzufügen oder Entfernen von Favoriten.',
                        'Filmdetails: Zeigt vollständige Informationen zum Film mit Optionen, den Film zur Favoritenliste hinzuzufügen oder daraus zu entfernen.',
                        'Profilseite: User können ihre Daten ansehen, aktualisieren oder ihr Profil löschen.',
                        'Navigation: Bietet Zugriff auf die Startseite, Genres, Meine Liste, Profil und Abmelden.'
                    ]
                },
                meet: {
                    title: "React PWA Meet",
                    description: "Die App wurde für das Eventmanagement entwickelt und nutzt React sowie einen testgetriebenen Entwicklungsansatz. Sie ist eine serverlose, progressive Web-App, die bevorstehende Events über die Google Calendar API abruft.",
                    features: [
                        'User können eine Stadt auswählen, um standortspezifische Events anzuzeigen.',
                        'Eventdetails lassen sich nach Bedarf ein- oder ausblenden.',
                        'Die Anzahl der angezeigten Events ist individuell einstellbar.',
                        'Bereits gespeicherte Eventdetails sind auch offline verfügbar.',
                        'Eine Startbildschirm-Verknüpfung ermöglicht schnellen Zugriff auf die App.',
                        'Diagramme bieten visuelle Einblicke in Eventdaten.'
                    ]
                }
            }
        },
        project_details: "Technologien",
        about: {
            title: "Über mich",
            welcomeText: `Hallo und willkommen auf meiner Seite! Hallo, ich bin Alina, frisch zertifizierte Full-Stack Web Developer.
            Ich lebe überall auf der Welt, aber mein Hauptsitz ist Berlin.🖤`,
            description: `Ich liebe es, neue Orte zu entdecken und mich Herausforderungen zu stellen – sei es in Escape Rooms, 
            beim Fallschirmspringen oder auf abenteuerlichen Wanderungen abseits bekannter Pfade. 
            Diese Neugier und Entschlossenheit spiegeln sich auch in meinen Coding-Projekten wider, in denen ich mit einem lösungsorientierten Ansatz meine Kenntnisse in HTML, CSS, JavaScript, React, TypeScript, Node.js und Debugging einbringe.`,
            skillsTitle: "Skills & Technologien",
            backgroundTitle: "Werdegang",
            backgroundText: `Ich habe über fünf Jahre Erfahrung in Sales und Customer Success, davon drei Jahre als Customer Success Manager in der SaaS-Branche. 
            Dabei betreue ich sensible CRM-Daten, unterstütze bei der Lösung von Softwareproblemen und arbeite eng mit Produktteams an der Weiterentwicklung unserer Software. 
            Gemeinsam mit meinem Team arbeite ich stetig an Ideen zur Verbesserung der Kundenerfahrung. Zusätzlich habe ich zwei Jahre Erfahrung in der Software-Fehlerbehebung 
            und drei Jahre im Bereich digitaler Lösungen gesammelt, wodurch ich mir technische Expertise aufbauen konnte.
            \n\nIn dieser Tätigkeit habe ich viel gelernt über die Bedürfnisse der User, die Funktionalität der Software und wie wichtig klare Kommunikation zwischen technischen und nicht-technischen Teams ist. 
            Gleichzeitig konnte ich immer besser Probleme lösen und mich mit digitalen Herausforderungen auseinandersetzen.`,
            whyCodingTitle: "Warum Coding?",
            whyCodingText: `**Die Arbeit in einem SaaS-Unternehmen** in einer kundenorientierten Rolle weckte mein Interesse an der Webentwicklung. 
            Als Customer Success Manager unterstützte ich oft bei der Fehlerbehebung von Softwareproblemen und fungierte als Vermittler. 
            Ich wollte mehr zum Problemlösen beitragen und den Prozess beschleunigen, deshalb ergriff ich die Initiative und begann vor zwei Jahren, mir das Programmieren selbst beizubringen. 
           Ich war schnell begeistert und meldete mich bei CareerFoundry zu einem Full-Stack-Web-Developer-Kurs an. Mein Ziel: meine Kenntnisse immer weiter auszubauen.
            \n\n**Meine Leidenschaft** für die Entwicklung interaktiver Apps treibt mich an, 
            stets bessere Lösungen zu schaffen. Ich genieße sowohl die Front-End- als auch die Back-End-Entwicklung und finde den Debugging-Prozess besonders spannend – wie ein Detektiv löse ich Rätsel und gehe Problemen auf den Grund.
            \n\n**Als Web Developer** lege ich großen Wert auf sauberen, strukturierten Code und gestalte User Interfaces, die intuitiv, barrierefrei und geräteübergreifend nutzbar sind. 
            Ich will ansprechende und funktionale digitale Lösungen schaffen, die den Usern eine mühelose und sichere Orientierung ermöglichen. Ich habe bereits erfolgreich Kunden unterstützt und freue mich darauf, 
            meine Fähigkeiten einzubringen, um die digitale User Experience weiter zu optimieren.
            \n\nIch freue mich wirklich sehr, dass ich nun endlich die Möglichkeit erhalte, mich in dem Bereich zu verwirklichen, in dem ich schon lange arbeiten möchte – **Coding**!`
        },
        contact: {
            formTitle: "Melde dich gerne bei mir",
            getInTouchTitle: "Lass uns in Kontakt bleiben!",
            formMessage: "Ich wohne in Berlin und bin offen für spannende Remote-Positionen – sei es in Teilzeit, Vollzeit oder als Freelancer. Melde dich einfach über das Kontaktformular oder direkt per E-Mail bei mir: ",
            namePlaceholder: "Vollständiger Name",
            emailPlaceholder: "E-Mail-Adresse",
            messagePlaceholder: "Nachricht",
            sendMessageButton: "NACHRICHT SENDEN",
            successMessage: "Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.",
            errorMessage: "Leider konnte deine Nachricht nicht gesendet werden. Bitte versuche es erneut.",
        },
        impressum: {
            information: "Angaben gemäß § 5 TMG",
            register: "Es gibt keinen Eintrag im Handelsregister.",
            email: "E-Mail:"
        },
        case_api: {
            title: "Fallstudie Movie_API",
            overview: {
                purpose_and_context: {
                    title: "ZWECK UND KONTEXT",
                    description: `Die Herausforderung bestand darin, die API und die Datenbank von Grund auf zu
neu zu erstellen und gleichzeitig eine nahtlose Verbindung zwischen ihnen zu gewährleisten.`
                },
                project_duration: {
                    title: "PROJEKTDAUER",
                    description: "Das Projekt wurde in etwa vier Wochen abgeschlossen, wobei jede Woche einer anderen Phase gewidmet war (Servereinrichtung, Datenbankerstellung, API-Implementierung und Cloud-Bereitstellung)."
                },
                objective: {
                    title: "ZIELE",
                    description: `Ziel war es, eine sichere und effiziente RESTful-API zu entwickeln, 
                    mit der die User Profile und Lieblingsfilme verwalten und Filmdetails erkunden können.`
                },
            },
            rest_api: {
                p: "Eine REST-API ist wie ein Bote zwischen zwei verschiedenen Systemen, der sie miteinander kommunizieren lässt.",
                client: "KUNDE",
                request: "ANFRAGE",
                response: "ANTWORT",
                database: "DATENBANK"
            },
            crud: {
                introduction: "CRUD steht für Erstellen, Lesen, Aktualisieren und Löschen. Mit diesen vier Operationen können Daten in Softwareanwendungen hinzugefügt, angezeigt, geändert oder aus der Datenbank entfernt werden. Dies wird bei der Erstellung von API-Endpunkten verwendet.",
                action: "CRUD IN AKTION",
                description: "Die Dokumentation zeigt immer, wie der Endpunkt, der eine CRUD-Operation aufruft, aufgebaut ist:"
            },
            mongodb: {
                tag: "Mongo Datenbank",
                introduction_1: "In einer Softwareanwendung wird eine Datenbank verwendet, um alle Arten von Informationen zu speichern, z. B. Produktkataloge.",
                introduction_2: "Eine MongoDB-Datenbank speichert diese Daten in einem leicht lesbaren Format, ähnlich wie eine Liste:",
            },
            access_control: {
                tag: "Authentifizierung",
                overview: {
                    authentication_title: "AUTHENTIFIZIERUNG",
                    authentication: `Bei der einfachen HTTP-Authentifizierung werden die Anmeldedaten sicher in der Kopfzeile gesendet, 
                    und die API prüft sie mit der Datenbank, um den Benutzer anzumelden.`,
                    authorization_title: "AUTHORIZATION",
                    authorization: "Wenn der Benutzername und das Passwort korrekt sind, generiert die App ein sicheres Token. Dieses Token wird mit jeder Anfrage gesendet und ist für den Zugriff auf die App erforderlich.",
                    security_title: "SICHERHEIT",
                    security: `Die Film-API verwendet Passwort-Hashing und wandelt Passwörter in Geheimcodes um, bevor sie gespeichert werden. 
                    Selbst wenn die Datenbank gehackt wird, bleiben die echten Kennwörter verborgen und nur der Nutzer kennt sie.`
                }
            },
            testing: {
                tag: "Fehlerbehebung",
                introduction_1: "Postman ist ein Tool, mit dem Entwickler testen können, wie ihre Webserver Anfragen und Antworten verarbeiten.",
                introduction_2: "Es ist wie ein digitaler Assistent, der ihnen hilft, sicherzustellen, dass alles richtig kommuniziert wird.",
                error: "Fehler",
                detects: "Postman entdeckt es",
                solution: "Lösung"
            },
            challenges: {
                tag: "Herausforderungen",
                overview: {
                    strategic_title: "Strategisches Debugging über Stack-Schichten hinweg",
                    strategic: `Da ich sowohl im Frontend als auch im Backend auf unerwartetes Verhalten gestoßen bin, habe ich mich auf Entwicklungswerkzeuge, strukturierte 
                             console.log-Ausgaben und try/catch-Blöcke, um die Ursachen zu isolieren.`,
                    implementing_title: "Implementierung der Zugriffskontrolle für die Integrität der Benutzerdaten",
                    implementing: "Um unbefugte Datenänderungen zu verhindern, habe ich eine strenge Benutzervalidierung implementiert, bei der das authentifizierte Benutzertoken mit den Routenparametern verglichen wird:",
                    resolving_title: "Behebung von Problemen mit der API-Kompatibilität zwischen verschiedenen Frameworks",
                    resolving: `Bei der Integration von Angular stellte ich fest, dass JSON-Strukturen, die für React akzeptabel waren, clientseitige Fehler auslösten.
                                Ich analysierte die Antwort-Payloads, passte Formatierung und Struktur an und implementierte eine bedingte Antwortlogik, um 
                                ein einheitliches Verhalten über mehrere Frontend-Frameworks hinweg zu unterstützen.`
                }
            },
            final_conclusions: {
                tag: "Abschließendes Fazit",
                looking_title: "Rückblick",
                looking_text: `Ich habe gelernt, wie man sichere, zuverlässige APIs von Grund auf erstellt, mit einem starken Fokus auf eine saubere Architektur 
                                und Fehlerbehandlung. Die wichtigste Erkenntnis: Eine gute Fehlerbehandlung und die Liebe zum Detail können die meisten Fehler verhindern. 
                                Auch der Problemlösungsprozess hat mir viel Spaß gemacht - es war wie Detektivarbeit.`,
                future_title: "In der Zukunft",
                future_text: `In Zukunft würde ich gerne eine Funktion zum Zurücksetzen des Passworts und eine OAuth-Anmeldung hinzufügen, um die Benutzerfreundlichkeit zu verbessern. 
                                Ich würde auch Benutzerkommentare und Bewertungen hinzufügen, um die Interaktion und die allgemeine Benutzererfahrung zu verbessern.`
            },
            back_button: "Zurück"
        }
    }
    // tells TS to treat the entire Texts object as deeply read-only with literal types, not just general strings.
} as const;


// creates a TS type TextType that reflects structure of Texts { en: {...}, de:{...}}
type TextsType = typeof Texts; // gives {en: {...}, de:{...}}
export type Language = keyof TextsType; //gives "en" | "de"

export default Texts;
