import { Github, Twitter, Figma } from 'lucide-react';
import { InstagramIcon ,LinkedinIcon  } from 'lucide-react';
import Logohtml from '/public/images/logos/icon-html.svg'
import Logocss from '/public/images/logos/icon-css.svg'
import Logobootstrap from '/public/images/logos/icon-bootstrap.svg'
import Logophp from '/public/images/logos/icon-php.svg'
import Logowordpress from '/public/images/logos/icon-wordpress.svg'
import Logocpp from '/public/images/logos/icon-cpp.svg'
import Logoc from '/public/images/logos/icon-c.svg'
import Logopython from '/public/images/logos/icon-python.svg'
import Logomysql from '/public/images/logos/icon-mysql.svg'
import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoNest from '/public/images/logos/icon-nest.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoCypress from '/public/images/logos/icon-cypress.svg';
import LogoCypressLight from '/public/images/logos/icon-cypress-light.svg';
import LogoStorybook from '/public/images/logos/icon-storybook.svg';
import LogoGit from '/public/images/logos/icon-git.svg';

import LogoUpwork from '/public/images/logos/logo-upwork.svg';
import LogoUpworkLite from '/public/images/logos/logo-upwork-lite.svg';
import LogoGreenApex from '/public/images/logos/nsl.jpeg';
import LogoGreenApexLight from '/public/images/logos/nsl.jpeg';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.jpeg';
import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel.jpeg';

import Projectlegalcorp from '/public/images/legalcorp.png';
import Projectyoutheve from '/public/images/youtheve.png';
import projectteknoleed from '/public/images/teknoleed.png';
import projectgulfscoop from '/public/images/gulfscoop.png';
import projectmunificence from '/public/images/munificence.png';

import AvatarKrisztian from '/public/images/10.svg';
import AvatarEugen from '/public/images/11.svg';
import AvatarDummy from '/public/images/11.svg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/ARHAN70',
  GITHUB_REPO: 'https://github.com/ARHAN70/Arhan.dev',
  TWITTER: '#',
  FIGMA: '#',
  INSTAGRAMICON:'https://www.instagram.com/arhan_akhtar_07?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  LINKEDINICON:'https://www.linkedin.com/in/arhan-akhtar-521bb9244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Education',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/ARHAN70',
  },
  {
    icon: Twitter,
    url: '#',
  },
  {
    icon: Figma,
    url: '#',
  },
  {
    icon: InstagramIcon,
    url: 'https://www.instagram.com/arhan_akhtar_07?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  },
  {
    icon: LinkedinIcon,
    url: 'https://www.linkedin.com/in/arhan-akhtar-521bb9244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Html',
    logo: Logohtml,
    url: '#',
  },
  {
    label: 'Css',
    logo: Logocss,
    url: '#',
  },
  {
    label: 'Php',
    logo: Logophp,
    url: '#',
  },
  {
    label: 'Bootstrap',
    logo: Logobootstrap,
    url: '#',
  },
  {
    label: 'Mysql',
    logo: Logomysql,
    url: '#',
  },
  {
    label: 'C',
    logo: Logoc,
    url: '#',
  },
  {
    label: 'C++',
    logo: Logocpp,
    url: '#',
  },
  {
    label: 'Python',
    logo: Logopython,
    url: '#',
  },
  {
    label: 'Wordpress',
    logo: Logowordpress,
    url: '#',
  },
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'Nest.js',
    logo: LogoNest,
    url: 'https://nestjs.com/',
  },
  {
    label: 'Socket.io',
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: 'https://socket.io/',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  {
    label: 'Cypress',
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: 'https://www.cypress.io/',
  },
  {
    label: 'Storybook',
    logo: LogoStorybook,
    url: 'https://storybook.js.org/',
  },
  /*{
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },*/
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoUpwork,
    darkModeLogo: LogoUpworkLite,
    logoAlt: 'Upwork logo',
    position: 'Web Application Developer',
    startDate: new Date(2023, 9),
    currentlyWorkHere: true,
    summary: [
      'Worked on various platforms like Wordpress , Figma and blogger.',
      'Worked with a variety of technologies, including AI, API, Firebase, and Others.',
    ],
  },
  {
    logo: LogoGreenApex,
    darkModeLogo: LogoGreenApexLight,
    logoAlt: 'Greenapex logo',
    position: 'Team Lead',
    startDate: new Date(2022, 12),
    endDate: new Date(2023, 2),
    summary: [
      'Acted as team lead in different projects.',
      'Brainstormed new ideas & gathered requirements for internal projects.',
      'Designed architecture of different projects (frontend + backend).',
      'Worked on enterprise-level projects for a variety of clients.',
      'Handled sprint planning & task distribution.',
    ],
  },
  {
    logo: LogoDotnpixel,
    darkModeLogo: LogoDotnpixelLight,
    logoAlt: 'Dotnpixel logo',
    position: 'Full Stack Developer',
    startDate: new Date(2021, 7),
    endDate: new Date(2021, 9),
    summary: ['Worked as a full stack developer (UI / UX Designer).'],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'The Munificence',
    description:
      'The Munificence, your premier online destination for exquisite and unique home décor and lifestyle products. At The Munificence, we believe in the beauty of thoughtful design and the power of curated elegance. Our collection features a diverse array of high-quality items, from luxurious furnishings and art pieces to stylish accessories and personalized gifts. Each product is carefully selected to inspire and enhance your living space, reflecting a blend of timeless sophistication and modern flair. Discover the perfect pieces to elevate your home and express your personal style with The Munificence.',
    url: 'https://themunificence.com',
    previewImage: projectmunificence,
    technologies: [
      'Elementor',
      'Wp-Bakery',
      'Redux Toolkit',
      'Wordpress',
    ],
  },
  {
    name: 'Gulfscoop',
    description:
      'Gulf Scoop is a comprehensive online platform dedicated to delivering the latest news and updates from the Gulf region. Covering a wide range of topics including business, technology, lifestyle, and sports, Gulf Scoop provides its audience with timely and reliable information. Whether you're interested in regional developments or global events affecting the Gulf, Gulf Scoop is your go-to source for insightful articles and breaking news.',
    url: 'https://www.gulfscoop.com',
    previewImage: projectgulfscoop,
    technologies: [
      'Wordpress',
      'Google SEO Kit'
      'Elementor',
      'Wp-Form',
      'Firebase',
    ],
  },
  {
    name: 'Teknoleed',
    description:
      'Elevate your brand with innovative marketing solutions. Our marketing agency website offers tailored strategies in SEO, content creation, social media, and more to drive growth and maximize your ROI.',
    url: 'https://teknoleed.com',
    previewImage: projectteknoleed,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Redux Toolkit',
      'Wordpress',
    ],
  },
  {
    name: 'Youth Eve Media',
    description:
      'Stay informed with the latest updates and in-depth analysis on current events, politics, entertainment, and more. Our news website delivers reliable and timely information to keep you in the know.',
    url: 'https://www.youthevemedia.com',
    previewImage: Projectyoutheve,
    technologies: [
      'Wordpress',
      'Elementor',
      'Wp-Form',
      'Firebase',
      'Express.js',
      'PostgreSQL',
      'Styled Components',
      'Redux',
    ],
  },
  {
    name: 'Legalcorp',
    description:
      'Access expert legal advice and services tailored to your needs. Our legal consultation website connects you with experienced attorneys for personalized guidance on a wide range of legal issues.',
    url: 'https://legalcorp.co.in',
    previewImage: Projectlegalcorp,
    technologies: [
      'Wordpress',
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Material UI',
      'Redux Toolkit',
      'React Query',
      'Express.js',
      'PostgreSQL',
      'Firebase',
      'AWS Amplify',
      'Cypress',
      'Storybook',
    ],
  },
];
export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'DAV GRK School',
    personAvatar: AvatarKrisztian,
    title: 'Percentage:76.2%',
    testimonial:
    'Marticulation / 10th From CBSE (2020)',
  },
  {
    personName: 'Sarala Birla University',
    personAvatar: AvatarEugen,
    title: 'CGPA : 8.54 / 10',
    testimonial:
      'Diploma : Computer Science and Engineering (2020 - 2023)',
  },
  {
    personName: 'Sarala Birla University',
    personAvatar: AvatarDummy,
    title: 'CGPA : 8.96 / 10',
    testimonial:
      'B.Tech in Computer Science and Engineering (2023 - 2026)',
  },
];

