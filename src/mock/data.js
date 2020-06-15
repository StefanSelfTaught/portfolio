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
  img: 'photo.jpg',
  paragraphOne:
    'Professionally connected with the web development industry and information technology for many years.',
  paragraphTwo:
    'Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series and, recently, English literature. A family person, father of two fractious boys, therefore remote employment is preferred.',
  paragraphThree:
    'Interested in the entire frontend spectrum and working on ambitious projects with positive people.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'movies.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'stefanpop999@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: '',
    },
  ],
};
