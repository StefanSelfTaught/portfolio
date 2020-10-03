import uuidv1 from 'uuid/v1';

// HERO DATA
export const heroData = {
  title: 'Hey, my name is',
  name: 'Stefan Pop',
  role: "I'm a Full-Stack Web Developer",
  subtitle: 'I can bring your product to life',
  cta1: 'Know more',
  cta2: 'See my work',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Stefan Pop is very passionate about the web development industry and information technology. He has a `constant learning` mindset, eager to stay in tune with the latest and modern technologies.',
  paragraphTwo:
    'His hunger for knowledge and his perseveration are the reasons of why he can achieve many things in a short period of time and learn a lot. He considers himself a well-organised person, problem solver and he loves to work in a team on ambitious projects with the right people. He enjoys working on the front-end with React but he is very flexible with a lot of technologies.',
  paragraphThree:
    'Besides programming, his hobbies are outdoor sports, cycling, CrossFit, bodyweight training, reading and eating.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'bootcamps.jpg',
    title: 'Softcamp',
    info:
      "Softcamp is build on the MERN stack and it's a bootcamp directory web app. Publishers can add their bootcamps and normal users can search their desired bootcamps and also add a review.",
    info2: '',
    url: 'https://priceless-bose-463530.netlify.app',
    repo: 'https://github.com/StefanSelfTaught/Softcamp-frontend',
    technologies: [
      {
        id: uuidv1(),
        name: 'React',
        url: 'https://reactjs.org/',
      },
      {
        id: uuidv1(),
        name: 'Redux',
        url: 'https://redux.js.org/',
      },
      {
        id: uuidv1(),
        name: 'Ant Design',
        url: 'https://ant.design/',
      },
      {
        id: uuidv1(),
        name: 'Express',
        url: 'https://expressjs.com/',
      },
      {
        id: uuidv1(),
        name: 'MongoDB',
        url: 'https://www.mongodb.com/',
      },
      {
        id: uuidv1(),
        name: 'Immer',
        url: 'https://immerjs.github.io/immer/docs/introduction',
      },
    ],
  },
  {
    id: uuidv1(),
    img: 'movies.jpg',
    title: 'Eco Network',
    info:
      'Using TMDB REST API, this website shows a lot of information about movies and series where users can decide what to watch.',
    info2: '',
    url: 'https://stupefied-kalam-febd99.netlify.app/',
    repo: 'https://github.com/StefanSelfTaught/movies_finder',
    technologies: [
      {
        id: uuidv1(),
        name: 'Vanilla Javascript',
        url: 'https://en.wikipedia.org/wiki/JavaScript',
      },
      {
        id: uuidv1(),
        name: 'Bootstrap',
        url: 'https://getbootstrap.com/',
      },
      {
        id: uuidv1(),
        name: 'Parcel Bundler',
        url: 'https://parceljs.org/',
      },
      {
        id: uuidv1(),
        name: 'TMDB REST API',
        url: 'https://www.themoviedb.org/documentation/api',
      },
    ],
  },
  {
    id: uuidv1(),
    img: 'chat.jpg',
    title: 'Chat App',
    info: 'Real time chat application with multiple channels.',
    info2: '',
    url: 'https://chat-app72.herokuapp.com/channels',
    repo: 'https://github.com/StefanSelfTaught/real-time-app',
    technologies: [
      {
        id: uuidv1(),
        name: 'AdonisJs (NodeJS MVC Framework)',
        url: 'https://adonisjs.com/',
      },
      {
        id: uuidv1(),
        name: 'Websockets',
        url: 'https://en.wikipedia.org/wiki/WebSocket',
      },
      {
        id: uuidv1(),
        name: 'BulmaCSS',
        url: 'https://bulma.io/',
      },
      {
        id: uuidv1(),
        name: 'Webpack',
        url: 'https://webpack.js.org/',
      },
      {
        id: uuidv1(),
        name: 'MySQL',
        url: 'https://www.mysql.com/',
      },
    ],
  },
  {
    id: uuidv1(),
    img: 'countries.jpg',
    title: 'World Countries',
    info:
      'Take a look at all the countries in the world, filter them by continent and discover some info about each one.',
    info2: '',
    url: 'https://stefanselftaught.github.io/world_countries/',
    repo: 'https://github.com/StefanSelfTaught/world_countries',
    technologies: [
      {
        id: uuidv1(),
        name: 'React',
        url: 'https://reactjs.org/',
      },
      {
        id: uuidv1(),
        name: 'Countries REST API',
        url: 'https://restcountries.eu/',
      },
    ],
  },
  {
    id: uuidv1(),
    img: 'fylo.jpg',
    title: 'Fylo Design',
    info: 'Simple HTML and CSS design with animations.',
    info2: '',
    url: 'https://stefanselftaught.github.io/fylo_design/',
    repo: 'https://github.com/StefanSelfTaught/fylo_design',
    technologies: [
      {
        id: uuidv1(),
        name: 'SCSS',
        url: 'https://sass-lang.com/',
      },
      {
        id: uuidv1(),
        name: 'GSAP Animation',
        url: 'https://greensock.com/gsap/',
      },
      {
        id: uuidv1(),
        name: 'BEM Methodology',
        url: 'https://en.bem.info/methodology/',
      },
    ],
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's talk",
  email: 'stefanpop999@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/stefan-p-9a55a6191/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/StefanSelfTaught',
    },
  ],
};
