export type Language = { code: string; flag: string; label: string };

export type Capability = {
    category: string;
    desc: string;
    items: string[];
};

export interface Project {
    title: string;
    desc: string;
    year: string;
    tech: string[];
    image: string;
    longDesc?: string;
}

export interface PersonalProject {
    title: string;
    desc: string;
    tech: string[];
    image: string;
    longDesc?: string;
}

export type ExperienceItem = {
    company: string;
    tagline: string;
    period: string;
    position: string;
    location: string;
    industry: string;
    website: string;
    description: string[];
};

export const portfolioData = {
    person: {
        name: 'Shivam Chouksey',
    },
    hero: {
        titleLines: ['SHIVAM', 'CHOUKSEY'],
        whoAmILabel: 'WHO AM I',
        intro:
            `Frontend Focused Software Enginner with 2 years of experience building scalable and responsive web applications
       using React.js, Next,js, Angular, and TypeScript. Skilled in performance optimization, reusable component architecture, REST API integration, real-time applications, CSR, and state management. Experienced in developing
       enterprise-grade dashboards and collaborative platforms with a focus on scalability, and clean frontend architecture.`
        ,
        scrollCtaLabel: 'Scroll',
        scrollCtaHref: '#experience',
    },
    aboutProfile: {
        sectionLabel: 'ABOUT / PROFILE',
        headline:
            'Over the last 2 years, I have worked on frontend applications with a strong focus on scalable UI architecture, real-time dashboards, interactive charts, and seamless user experience using React.js, Next.js and Angular.',
        focusAreas: ['Web Development', 'Frontend Engineering'],
        paragraphs: [
            'Frontend Developer with 2+ years of experience building scalable web applications, real-time dashboards, and interactive user interfaces using Angular, React, and Next.js. Strong expertise in TypeScript, state management, API integration, and performance optimization.',
            'Experienced in developing data-driven platforms with live updates, AG Grid, WebSockets, and analytical charting solutions. I focus on building clean, reusable, and maintainable frontend architectures that deliver seamless user experiences.',
            'I have hands-on experience working on dairy management and accounting platforms in agile development environments.',
            'I am fluent in English, Hindi, and Marathi, and can understand Marathi comfortably while collaborating with cross-functional teams.',
        ],
    },
    contact: {
        sectionLabel: 'CONNECT',
        email: 'shivamaashachouksey@gmail.com',
        links: [
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivam-21-chouskey/' },
            { label: 'GitHub', href: 'https://github.com/Shivam-Chouksey' }
        ],
    },
    footer: {
        designedBy: 'DESIGNED & BUILT BY SHIVAM CHOUKSEY',
        lastUpdated: 'LAST UPDATED / APR 2026',
    },
    languages: [
        { code: 'EN', flag: 'US', label: 'English' },
    ] satisfies Language[],
    navItems: ['About', 'Capabilities', 'Experience', 'Projects', 'Personal projects', 'Contact'] satisfies string[],
    projects: [
        {
            title: 'Farmdesk',
            desc: 'FarmDesk dairy management platform.',
            year: '2024',
            tech: ['Angular', 'Am5 charts', 'REST APIs', 'RxJs'],
            image: 'Farmdesk',
            longDesc:
                'Developed interactive dashboards and data visualization modules for the FarmDesk dairy management platform using Angular, focusing on carbon footprint management, CO2 emissions tracking, milk properties, fodder, and crop analytics.',
        },
        {
            title: 'Taxonomy',
            desc: 'Accounting platform for live financial data management and reporting.',
            year: '2025',
            tech: ['ReactJs', 'NextJS', 'AG Grid', 'Web Sockets', 'REST APIs'],
            image: 'Taxonomy',
            longDesc:
                'Developed a real-time accounting platform using React.js, Next.js for managing financial and operational data.Implemented AG Grid and WebSockets to handle large datasets with live updates and dynamic reporting dashboards.',
        },

    ] satisfies Project[],
    personalProjects: [
        {
            title: 'Agricultural Enterprise Resource Planning',
            desc: 'Personal and operational expense management for complex agricultural activities.',
            tech: ['NextJS', 'REST APIs'],
            image: 'ERP',
            longDesc:
                'A comprehensive management platform that helps users track household and agricultural expenses while managing contacts, contracts, Assets, Revenue and crop information in one centralized system..',
        },
        {
            title: 'DineFlow',
            desc: 'Complete Restaurant Management Solution.',
            tech: ['NextJS', 'REST APIs'],
            image: 'DineFlow',
            longDesc:
                'Restaurant management application that enables customers to browse menus and book tables, while providing administrators with tools to manage tables, staff, attendants, bookings, and menu items efficiently.',
        },

    ] satisfies PersonalProject[],
    capabilities: [
        {
            category: 'Frontend & Database',
            desc: 'Crafting responsive interfaces and designing robust, optimized data layers.',
            items: [
                'React',
                'Next.js',
                'Angular',
                'TypeScript',
                'JavaScript',
                'Tailwind CSS',
                'Redux toolkit',
                'HTML5',
                'CSS3',
                'PostgreSQL',
                'Docker',
                'Git',
            ],
        },
        {
            category: 'Backend Basics',
            desc: 'Building RESTful APIs and backend services using Node.js, Express.js and Django DRF, and PostgreSQL through hands-on project development.',
            items: [
                'Node.js',
                'Express',
            ]
        }
    ] satisfies Capability[],
    experience: [
        {
            company: 'Noovosoft Technology',
            tagline: '',
            position: 'Application Developer',
            period: 'Aug 2024 - Present',
            industry: 'Software',
            location: 'Pune',
            website: '',
            description:
                ['Frontend Engineer with 2 years of experience building scalable web applications using Angular, React.js, Next.js, and TypeScript. Skilled in developing reusable UI systems, enterprise dashboards, real-time applications, and performance-optimized frontend architectures. Experienced in REST API integration, RxJS, WebSockets, state management, and modern frontend development practices.']
        }
    ] satisfies ExperienceItem[],
};