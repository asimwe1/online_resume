const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I have a deep understanding of both front-end and back-end technologies, enabling me to create full-featured web applications that are dynamic, scalable, and efficient.',
    },
    {
        id: 1,
        title: 'Mobile Development',
        desc: "I specialize in building cross-platform mobile applications using React Native and Flutter. My expertise includes developing user-friendly, high-performance mobile apps that run seamlessly on both iOS and Android. I focus on delivering mobile solutions that provide exceptional user experiences and meet business goals.",
    },
    {
        id: 2,
        title: 'Designing (UI/UX)',
        desc: 'I am proficient in UI/UX design, with experience using tools like Figma, Adobe XD, and Sketch to create intuitive and visually appealing user interfaces. My focus is on enhancing the user journey by designing products that are both functional and aesthetically pleasing, ensuring an optimal user experience.',
    },
    {
        id: 3,
        title: 'Github',
        desc: "I have extensive experience using GitHub for version control and collaboration. From managing repositories to implementing continuous integration, GitHub is integral to my workflow. I utilize its pull requests, branching, and issue tracking features to maintain high code quality and collaborate effectively with teams.",
    },
    {
        id: 4,
        title: 'Open Source Contributor',
        desc: "As an active open-source contributor, I regularly contribute to various projects, improving codebases and adding new features. This allows me to continuously learn, grow my skills, and give back to the developer community by collaborating with developers worldwide.",
    },
    {
        id: 5,
        title: 'Desktop Application Development',
        desc: 'I am very good at making desktop application using c++ and qt for modern applications that runs in all platforms whether windows or linux. '
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
