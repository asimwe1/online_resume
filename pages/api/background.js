const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Rwanda Coding Academy',
                degree: 'SPE, Software Programming & Embedded Systems',
                detail: 'Diploma in Computer System Engineering from RCA.',
                year: '2023-2026'
            },
            {
                id: 1,
                title: 'Indian Institute of Technology Kanpur',
                degree: 'MS, Cognitive Neuroscience',
                detail: 'Diploma in Neuroscience and Brain Psychology.',
                year: '2021-2025'
            },
        ]
    },
    {
        expCards: [
            {
                id: 0,
                title: 'Landry SBusiness',
                role: 'Founder & Developer',
                url: 'https://linkedin.com/in/asimwe-landry',
                desc: 'Founded and developed multiple software solutions, specializing in web and mobile applications.',
                year: '01/2020 - Present',
                location: 'Kigali, Rwanda'
            },
            {
                id: 1,
                title: 'ApheZis LTD',
                role: 'Frontend Developer & Graphic Designer',
                url: 'https://aphezis.com/',
                desc: 'As a frontend developer, I use React, Next.js, and JavaScript to build user interfaces for web applications.',
                year: '02/2023 - Present',
                location: 'Kigali, Rwanda'
            },
            {
                id: 2,
                title: 'Neza Lab',
                role: 'Graphic Designer',
                url: 'https://nezalab.com',
                desc: 'As a designer, I worked on creating interactive and modern designs for web layouts and posters.',
                year: '02/2020 - 08/2023',
                location: 'Beijing, China'
            },
            {
                id: 3,
                title: 'KISCO LTD',
                role: 'Intern',
                url: 'no website',
                desc: "Worked as an intern, learning CRUD operations in PHP, and utilizing Firebase for backend solutions.",
                year: '09/2020 - 02/2023',
                location: 'Kigali, Rwanda'
            },
            {
                id: 4,
                title: 'Binance Inc',
                role: 'Summer Intern',
                url: 'https://binance.com',
                desc: 'Gained experience in Web3 integration using Solidity and Rust to develop modern Web3 applications.',
                year: 'Summer 2022',
                location: 'Remote'
            },
            {
                id: 5,
                title: 'Switch Markets',
                role: 'Social Media Influencer',
                url: 'https://switchmarkets.com',
                desc: 'Omline social media influencer for switch markets broker.',
                year: '07/2024 - Present',
                location: 'Remote'
            },
            {
                id: 6,
                title: 'Internet Games',
                role: 'Frontend Developer',
                url: 'https://internet.game',
                desc: 'Developed an intuitive frontend in a team as a freelancer',
                year: '12/2023 - 06/2024',
                location: 'Remote'
            },
            {
                id: 7,
                title: 'Motion Recruitment',
                role: 'Graphic Designer',
                url: 'http://motionrecruitment.com',
                desc: 'Hired to make logos for certain projects to use',
                year: '04/2024 - 06/2024',
                location: 'Remote',
            },
        ]
    }
];

export default function handler(req, res) {
    res.status(200).json(background);
}
