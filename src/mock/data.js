import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Martin Mroc | Frontend Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Martin Mroc.',
  subtitle: "I'm Frontend Web developer.",
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
    img: 'Restaurant-template.png',
    title: 'Restaurant Web Template',
    info: 'Website designed to promote a restaurant. ',
    info2: 'This website template is ready fo using. If you are interested in this web site, contact me.',
    url: 'https://restaurant-page-v1.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Final-thesis.png',
    title: 'Technological data analysis of the steelmaking ',
    info:
      'In my final thesis I focused on design and implementation of the web application for technological data analysis of the steelmaking. The main functions of this application are: storing data in a database, retrieving data from a database, displaying data in graphs, statistical calculations and data analysis. To create the application I used technologies: JavaScript, jQuery, Ajax, HTML, CSS, Bootstrap, Node.js, Express.js, MongoDb and Mongoose. ',
    info2: '',
    url: '',
    repo: 'https://github.com/MartinMroc95/Diplomova_praca', // if no repo, the button will not show up
  },
];

// SKILLS DATA
export const skillsData = [
  {
    id: nanoid(),
    title: 'React.js',
    url: 'https://reactjs.org/',
    power: 60,
  },
  {
    id: nanoid(),
    title: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    power: 50,
  },
  {
    id: nanoid(),
    title: 'Gatsby.js',
    url: 'https://www.gatsbyjs.com/',
    power: 60,
  },
  {
    id: nanoid(),
    title: 'jQuery',
    url: 'https://jquery.com/',
    power: 50,
  },
  {
    id: nanoid(),
    title: 'HTML5',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
    power: 50,
  },
  {
    id: nanoid(),
    title: 'CSS/CSS3',
    url: 'https://www.tutorialrepublic.com/css-tutorial/',
    power: 50,
  },
  {
    id: nanoid(),
    title: 'SCSS/SASS',
    url: 'https://sass-lang.com/',
    power: 50,
  },
  {
    id: nanoid(),
    title: 'Node.js',
    url: 'https://nodejs.org/en/',
    power: 50,
  },
  {
    id: nanoid(),
    title: 'Express.js',
    url: 'https://expressjs.com/',
    power: 50,
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    url: 'https://www.mongodb.com/',
    power: 50,
  },
  {
    id: nanoid(),
    title: 'Git',
    url: 'https://git-scm.com/about',
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
