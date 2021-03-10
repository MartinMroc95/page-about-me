import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Martin Mroc | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Martin Mroc.',
  subtitle: "I'm Web developer.",
  cta: 'More about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Last year I finished second degree of study at Technical University of Košice in program Informatization of processes. The main focus of this field was programming in modern languages and technologies, such as JavaScript, jQuery, Java, C++ and so on.',
  paragraphTwo:
    'The most interesting stuff for me during my studies were web technologies which I used during working on my bacherol and final thesis. Below are more infromations about final thesis.',
  paragraphThree:
    'My currently focus are web applications mostly in React.js. I have got experience with React Hooks, React Router, React Intl, Axios, CSS, SCSS/SASS, HTML5, Ant design library and React Bootstrap.',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Final Thesis',
    info:
      'In my final thesis I focused on design and implementation of the web application for technological data analysis of the steelmaking. The main functions of this application are: storing data in a database, retrieving data from a database, displaying data in graphs, statistical calculations and data analysis. To create the application I used technologies: JavaScript, jQuery, Ajax, HTML, CSS, Bootstrap, Node.js, Express.js, MongoDb and Mongoose. ',
    info2: '',
    url: '',
    repo: 'https://github.com/MartinMroc95/Diplomova_praca', // if no repo, the button will not show up
  },  
  {
    id: nanoid(),
    img: 'Restaurant-template.png',
    title: 'Restaurant Web Template',
    info: 'Website designed to promote a restaurant. ',
    info2: '',
    url: 'https://restaurant-page-v1.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
];

// SKILLS DATA
export const skillsData = [
  {
    id: nanoid(),
    title: 'React.js',
    power: 60,
  },
  {
    id: nanoid(),
    title: 'Gatsby.js',
    power: 60,
  },
  {
    id: nanoid(),
    title: 'JavaScript',
    power: 50,
  },
  {
    id: nanoid(),
    title: 'jQuery',
    power: 50,
  },
  {
    id: nanoid(),
    title: 'HTML5',
    power: 50,
  },
  { 
    id: nanoid(),
    title: 'CSS',
    power: 50,
  },
  {
    id: nanoid(),
    title: 'SCSS/SASS',
    power: 50,
  },
  {
    id: nanoid(),
    title: 'Node.js',
    power: 50,
  },
  {
    id: nanoid(),
    title: 'Express.js',
    power: 50,
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to contact me?',
  btn: 'Click here @',
  email: 'mato.mroc@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/martin.mroc/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mroc-martin/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/MartinMroc95/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
