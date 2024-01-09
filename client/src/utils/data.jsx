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
      id: 5,
      name: 'Contacto',
      icon: <BsFillChatLeftTextFill/>,
      path: '/contact',
    },
  ];

export const projects = [
      {
        id: 1,
        name: "Búhos Nocturnos",
        img: './projects/nocturne-owls.webp',
        demo: 'https://www.nocturneowls.tech/',
        repository: 'https://github.com/Nocturnes-Owls'
    },
    {
        id: 2,
        name: "Pura Vida Viajes",
        img: './projects/puraVidaViajes.webp',
        demo: 'https://client-puravidas-projects.vercel.app/',
        repository: 'https://github.com/KEspinozaLuis/PF_ViajesPuraVidaPremium'
    },
    {
        id: 3,
        name: "PI Dogs",
        img: './projects/PIDogs.webp',
        demo: 'https://pi-dogs-kel.vercel.app/',
        repository: 'https://github.com/KEspinozaLuis/PI_Dogs'
    },
    {
        id: 4,
        name: "Pokedex",
        img: './projects/Pokedex.webp',
        demo: 'https://pokedex-kel.vercel.app/',
        repository: 'https://github.com/KEspinozaLuis/Pokedex'
    },
    {
        id: 5,
        name: "Esquina Verde",
        img: './projects/EsquinaVerde.webp',
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
      year: '2023',
      title: 'Front end Developer',
      site: 'Pura Vida Viajes Premium',
      desc: 'Desarrollé parte de la interfaz y funcionalidades de la aplicación web para la empresa Pura Vida Viajes Premium que conecta clientes con expertos para planificar su viaje.',
    },
  
    {
      id: 2,
      category: 'experience',
      icon: <BsBriefcaseFill/>,
      year: '2021 - 2023',
      title: 'Analista Funcional',
      site: 'Avatar Global',
      desc: 'Recepción y análisis de requerimientos, elaboración y ejecución de casos de pruebas.',
    },
  
    {
      id: 3,
      category: 'experience',
      icon: <BsBriefcaseFill/>,
      year: '2019 - 2021',
      title: 'Maquetador web',
      site: 'Avatar Global',
      desc: 'Maquetación y look and feel del web site Coppel.com, implementación de la técnica RWD(Responsive Web Design).',
    },
  
    {
      id: 4,
      category: 'education',
      icon: <BsMortarboardFill />,
      year: '2023',
      title: 'Fullstack developer',
      site: 'Henry',
      desc: 'Desarrollo fullstack manejando tecnologías como React, Redux, javascript, html, css, sass, node js, express y metodologías ágiles como Scrum.',
    },
  
    {
      id: 5,
      category: 'education',
      icon: <BsMortarboardFill />,
      year: '2019',
      title: 'Maquetación web',
      site: 'EdTeam',
      desc: 'Fortalecimiento de las tecnologías HTML5 Y CSS3.',
    },
  
    {
      id: 6,
      category: 'education',
      icon: <BsMortarboardFill />,
      year: '2018',
      title: 'Desarrollo web',
      site: 'DevMaster',
      desc: 'Desarrollo web con HTML, CSS y JS.',
    },
    {
      id: 7,
      category: 'education',
      icon: <BsMortarboardFill />,
      year: '2013 - 2018',
      title: 'Ingeniería de sistemas',
      site: 'UNJFSC',
      desc: 'Formación profesional para abordar desafíos complejos en el mundo de la tecnología, análisis de sistemas, la arquitectura de software y la gestión eficiente de proyectos.',
    },
  ];