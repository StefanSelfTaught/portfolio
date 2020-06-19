import uuidv1 from 'uuid/v1';

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
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
    'Professionally connected with the web development industry and information technology for many years.',
  paragraphTwo:
    'Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series and, recently, English literature. A family person, father of two fractious boys, therefore remote employment is preferred.',
  paragraphThree:
    'Interested in the entire frontend spectrum and working on ambitious projects with positive people.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'movies.jpg',
    title: '',
    info: '',
    info2: '',
    url: 'https://stupefied-kalam-febd99.netlify.app/',
    repo: 'https://github.com/StefanSelfTaught/movies_finder', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'fylo.jpg',
    title: '',
    info: '',
    info2: '',
    url: 'https://stefanselftaught.github.io/fylo_design/',
    repo: 'https://github.com/StefanSelfTaught/fylo_design', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'chat.jpg',
    title: '',
    info: '',
    info2: '',
    url: 'https://chat-app72.herokuapp.com/channels',
    repo: 'https://github.com/StefanSelfTaught/real-time-app', // if no repo, the button will not show up
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
      url: 'https://www.linkedin.com/in/stefan-pop-9a55a6191/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/StefanSelfTaught',
    },
  ],
};
