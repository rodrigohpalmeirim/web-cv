export const RESUME_DATA = {
    name: "Rodrigo Palmeirim",
    initials: "RP",
    location: "Lisbon, Portugal, Earth, GMT+0",
    locationLink: "https://www.google.com/maps/place/Lisbon",
    about:
        "Computer Science engineer and full-stack developer with a passion for simplicity and efficiency with attention to detail.",
    summary:
        "I've been interested in computers and technology since I can remember. I've always been curious about how things work and how I can make them better. I love learning and finding new tools that help me be more efficient. I'm a perfectionist and I always strive to deliver the best possible results. I'm also passionate about electronics and music - I play the violin since I was 8 years old (I did two secondary education degrees concurrently: one in music and one in science) and I'm learning more instruments.",
    avatarUrl: "https://avatars.githubusercontent.com/u/34187774",
    personalWebsiteUrl: "https://rodlabs.dev",
    contact: {
        email: "cv@rodlabs.dev",
        github: "rodrigohpalmeirim",
        tel: null,
        social: [
        ],
    },
    education: [
        {
            school: "Instituto Superior Técnico",
            degree: "Master's Degree in Computer Science and Engineering",
            start: "2021",
            end: "2024",
        },
        {
            school: "Norwegian University of Science and Technology",
            degree: "Eramus+ Exchange Student in Computer Science and Engineering",
            start: "2022",
            end: "2022",
        },
        {
            school: "Instituto Superior Técnico",
            degree: "Bachelor's Degree in Computer Science and Engineering",
            start: "2018",
            end: "2021",
        },
    ],
    work: [
        {
            company: "Truewind - now Axians",
            link: "https://www.axians.pt/",
            badges: ["Full-Stack"],
            title: "Junior Developer",
            start: "2024",
            end: "2024",
            description: "After my internship, I was hired as a junior developer at Truewind (which has since been acquired by Axians), where I work in research and in the development of full-stack applications.",
        },
        {
            company: "Truewind",
            link: "https://www.truewindglobal.com/",
            badges: ["Dissertation", "Performance Analysis", "Scalability", "Cloud Services"],
            title: "Intern",
            start: "2023",
            end: "2023",
            description: "For my master's degree dissertation, I interned at Truewind, where I was responsible for the performance and scalability analysis of a new OutSystems platform called OutSystems Developer Cloud.",
        }
    ],
    skills: [
        "JavaScript/TypeScript",
        "Svelte/SvelteKit",
        "React.js/Next.js",
        "Node.js",
        "Rust",
        "Python",
        "C/C++",
        "C#",
        "SQL",
        "Unity",
        "Java",
        "Android",
        "Linux",
        "Docker",
        "Git",
    ],
    projects: [
        {
            title: "Gira+",
            techStack: [
                "TypeScript",
                "SvelteKit",
                "TailwindCSS",
                "maplibre-gl",
                "Capacitor"
            ],
            description: "Alternative for Lisbon's public bike sharing system's official app, with a focus on speed, reliability and clean UI.",
            logo: "https://raw.githubusercontent.com/rt-evil-inc/gira/main/assets/icon.svg",
            link: {
                label: "github/rt-evil-inc/gira",
                href: "https://github.com/rt-evil-inc/gira",
            },
        },
        {
            title: "Automaton Simulator",
            techStack: [ "React.js" ],
            description: "A web app that allows you to create, simulate and visualize Turing machines. It aims to be a simple and intuitive tool for students and enthusiasts of automata theory.",
            logo: "https://raw.githubusercontent.com/rodrigohpalmeirim/automaton-simulator/master/public/logo-small.png",
            link: {
                label: "github/rodrigohpalmeirim/automaton-simulator",
                href: "https://github.com/rodrigohpalmeirim/automaton-simulator",
            },
        },
        {
            title: "Trip Finder",
            techStack: [ "SvelteKit", "TailwindCSS" ],
            description: "A web app that allows you to visualize the prices for all the round-trip flight combinations.",
            link: {
                label: "github/rodrigohpalmeirim/trip-finder",
                href: "https://github.com/rodrigohpalmeirim/trip-finder",
            },
            active: false,
        },
        {
            title: "1-2-1",
            techStack: [ "React.js", "PeerJS" ],
            description: "A web app that allows you to create private video calls where data doesn't go through a server. It uses PeerJS for peer-to-peer communication.",
            link: {
                label: "github/rodrigohpalmeirim/1-2-1",
                href: "https://github.com/rodrigohpalmeirim/1-2-1",
            },
            active: false,
        },
        {
            title: "Movie Night",
            techStack: [ "SvelteKit", "TailwindCSS", "socket.io", "WebTorrent" ],
            description: "A web app that allows you to watch movies with friends in real-time with a synchronized player. It uses WebTorrent for peer-to-peer streaming and socket.io for real-time communication. (Currently in development)",
            link: {
                label: "github/rodrigohpalmeirim/movie-night",
                href: "https://github.com/rodrigohpalmeirim/movie-night/tree/svelte",
            },
            active: false,
        },
        {
            title: "Passhash",
            techStack: [ "HTML", "CSS", "JavaScript" ],
            description: "A simple cool-looking web app for generating secure passwords by hashing simpler passwords",
            logo: "https://passhash.rodlabs.dev/favicon.ico",
            link: {
                label: "github/rodrigohpalmeirim/passhash",
                href: "https://github.com/rodrigohpalmeirim/passhash",
            },
            active: false,
        },
    ],
} as const;