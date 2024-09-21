const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Rwanda Coding Acdemy',
                degree: 'SPE, Software Programming & Embedded system',
                detail: "Diploma in Computer System Engineering from RCA.",
                year: '2023-2026'
            },
            {
                id: 1,
                title: 'Indian Institute of Technology Kanpur',
                degree: 'MS, Cognitive NeuroScience',
                detail: "Diploma in Neuroscince and brain Psychology.",
                year: '2021-2025'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'ApheZis LTD',
                role: 'Frontend Developer && Graphic Designer ',
                url: 'https://aphezis.com/',
                desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '02/2023 - Present',
                location: 'Kigali, Rwanda'
            },
            {
                id: 2,
                title: 'Neza Lab',
                role: 'Graphic Designer',
                url: 'https://nezalab.com',
                desc: 'As a designer, i worked on making interactive and modern designs web layout and posters',
                year: '02/2020 - 08/2023',
                location: 'Beijing, China'
            },
            {
                id: 3,
                title: 'KISCO LTD',
                role: 'Enternee',
                url: 'no website',
                desc: "I work there as an enternee, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
                year: '09/2020 - 02/2023',
                location: 'Kigali, Rwanda'
            },
            {
                id: 4,
                title: 'Binance Inc',
                role: 'Summer Enternee',
                url: 'https://binance.com',
                desc: 'I learnt web3 integration, I learned how to use solidity and rust to build modern-web3 websites.'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
