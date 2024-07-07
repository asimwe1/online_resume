const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'UET Peshawar',
                degree: 'BS, Computer System Engineering',
                detail: "Bachelor's Degree in Computer System Engineering from UET Peshawar.",
                year: '2018-2022'
            },
            {
                id: 1,
                title: 'Peshawar Model Degree College',
                degree: 'HSSC, Pre Engineering',
                detail: "Completed FSC part 1 and part 2 in Pre-Engineering from Peshawar Model Degree College.",
                year: '2015-2017'
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
