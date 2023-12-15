import { 
    BsFillHouseDoorFill,
    BsPersonFill,
    BsFillClipboard2DataFill,
    BsBriefcaseFill,
    BsFillChatLeftTextFill,
    BsMortarboardFill
} from "react-icons/bs";

import { 
    BiLogoReact,
    BiLogoJavascript,
    BiLogoRedux,
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoSass,
    BiLogoBootstrap,
    BiLogoTailwindCss,
    BiLogoNodejs,
    BiLogoGit
} from "react-icons/bi";

export const links = [
    {
      id: 1,
      name: 'Inicio',
      icon: <BsFillHouseDoorFill/>,
      path: '/',
    },
  
    {
      id: 2,
      name: 'Sobre mí',
      icon: <BsPersonFill/>,
      path: '/about',
    },
  
    {
      id: 3,
      name: 'Experiencias',
      icon: <BsFillClipboard2DataFill/>,
      path: '/experiences',
    },
    {
        id: 4,
        name: 'Proyectos',
        icon: <BsBriefcaseFill/>,
        path: '/projects',
    },
    {
      id: 4,
      name: 'Contacto',
      icon: <BsFillChatLeftTextFill/>,
      path: '/contact',
    },
  ];

export const projects = [
    {
        id: 1,
        name: "Pura Vida Viajes",
        img: './projects/puraVidaViajes.png',
        demo: 'https://client-puravidas-projects.vercel.app/',
        repository: 'https://github.com/KEspinozaLuis/PF_ViajesPuraVidaPremium'
    },
    {
        id: 2,
        name: "PI Dogs",
        img: './projects/PIDogs.png',
        demo: '',
        repository: 'https://github.com/KEspinozaLuis/PI_Dogs'
    },
    {
        id: 3,
        name: "Pokedex",
        img: './projects/Pokedex.png',
        demo: '',
        repository: 'https://github.com/KEspinozaLuis/Pokedex'
    },
    {
        id: 4,
        name: "Esquina Verde",
        img: './projects/puraVidaViajes.png',
        demo: '',
        repository: 'https://github.com/KEspinozaLuis/PF_ViajesPuraVidaPremium'
    }
]

export const skills = [
    {
        id: 1,
        tool: "React",
        icon: <BiLogoReact/>
    },
    {
        id: 2,
        tool: "JavaScript",
        icon: <BiLogoJavascript/>
    },
    {
        id: 3,
        tool: "Redux",
        icon: <BiLogoRedux/>
    },
    {
        id: 4,
        tool: "Html",
        icon: <BiLogoHtml5 />
    },
    {
        id: 5,
        tool: "Css",
        icon: <BiLogoCss3/>
    },
    {
        id: 6,
        tool: "Sass",
        icon: <BiLogoSass/>
    },
    {
        id: 7,
        tool: "Bootstrap",
        icon: <BiLogoBootstrap/>
    },
    {
        id: 8,
        tool: "Tailwind",
        icon: <BiLogoTailwindCss/>
    },
    {
        id: 9,
        tool: "Node Js",
        icon: <BiLogoNodejs/>
    },
    {
        id: 10,
        tool: "Git",
        icon: <BiLogoGit/>
    },
]

export const resume = [
    {
      id: 1,
      category: 'experience',
      icon:  <BsBriefcaseFill/>,
      year: '2018 - PRESENT',
      title: 'Front end Developer <span> Envato </span>',
      desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
    },
  
    {
      id: 2,
      category: 'experience',
      icon: <BsBriefcaseFill/>,
      year: '2013 - 2018',
      title: 'UI/UX Designer <span> Themeforest </span>',
      desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
    },
  
    {
      id: 3,
      category: 'experience',
      icon: <BsBriefcaseFill/>,
      year: '2005 - 2013',
      title: 'Consultant <span> Videohive </span>',
      desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
    },
  
    {
      id: 4,
      category: 'education',
      icon: <BsMortarboardFill />,
      year: '2015',
      title: 'Engineering Degree <span> Oxford University </span>',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
    },
  
    {
      id: 5,
      category: 'education',
      icon: <BsMortarboardFill />,
      year: '2012',
      title: 'Master Degree <span> KIEV University </span>',
      desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
    },
  
    {
      id: 6,
      category: 'education',
      icon: <BsMortarboardFill />,
      year: '2009',
      title: 'Bachelor Degree <span> Tunis High School </span>',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
    },
  ];