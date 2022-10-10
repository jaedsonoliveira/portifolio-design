//  icons
import {
  FiInstagram,
  FiGithub,
  FiMail,
  FiFacebook,
 
  
} from 'react-icons/fi';
import {
  FaStore,
  FaMobileAlt,
  FaStar,
  FaPaintBrush,
  FaWhatsapp
} from 'react-icons/fa'
import {CgWebsite} from 'react-icons/cg'
import {IoRocketSharp} from 'react-icons/io5'


// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/variedades2.png';
import Project2 from './assets/img/projects/moda.jpg';
import Project3 from './assets/img/projects/inovare2.png';
import Project4 from './assets/img/projects/playtime.png';
import Project5 from './assets/img/projects/lanca.png';
import Project6 from './assets/img/projects/smart.png';
import Project7 from './assets/img/projects/land1.png';
import Project8 from './assets/img/projects/land3.png';
import Project9 from './assets/img/projects/alvares.png';
import Project10 from './assets/img/projects/car.png';



// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg9 from './assets/img/skills/php4.png';
import SkillImg5 from './assets/img/skills/word2.png';
import SkillImg8 from './assets/img/skills/elementor2.png';
import SkillImg6 from './assets/img/skills/shopify.png';


// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },

  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'serviços',
    href: 'serviços',
  },
  {
    name: 'contato',
    href: 'contato',
  },
];

// social
export const social = [
 
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/alvestechsistemas/', target:'_blank',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FaWhatsapp />,
    href: 'https://api.whatsapp.com/send?phone=5588996147655&text=Oi+gostaria+de+mais+informacoes',
  },
  {
    icon: <FiFacebook />,
    href: '',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Fitness Variedades',
    category: 'loja virtual',
  },
  {
    id: '2',
    image: Project2,
    name: 'Moda Tendência',
    category: 'loja virtual',
  },
  
  {
    id: '4',
    image: Project4,
    name: 'Playtime',
    category: 'loja virtual',
  },
  {
    id: '6',
    image: Project6,
    name: 'Smart Course',
    category: 'site institucional',
  },
  {
    id: '5',
    image: Project5,
    name: 'Lançamento Digital',
    category: 'landing page',
  },
 
  {
    id: '7',
    image: Project7,
    name: 'Marketing Venda',
    category: 'landing page',
  },
  
  {
    id: '9',
    image: Project9,
    name: 'Alvares Advocacia',
    category: 'site institucional',
  },
 
  {
    id: '8',
    image: Project8,
    name: 'Ebook Land',
    category: 'landing page',
  },
  
  {
    id: '10',
    image: Project10,
    name: 'Cardapio Digital',
    category: 'site institucional',
  },
  {
    id: '3',
    image: Project3,
    name: 'Inovare Odontologia',
    category: 'site institucional',
  },
];

// projects
export const projectsNav = [
  {
    name: 'todos',
  },
  {
    name: 'loja virtual',
  },
  {
    name: 'landing page',
  },
  {
    name: 'site institucional',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {image: SkillImg9},
  {
    image: SkillImg5,
  },
  {
    image: SkillImg8,
  },
  
  
  
];

// services
export const serviços = [
  {
    icon: <CgWebsite/>,
    name: 'Criação de Sites',
    description:
      'Criação de sites profissionais,otimizados e gerenciáveis, ideal para divulgar sua empresa ou serviço ',
  },
  {
    icon: <FaStore/>,
    name: 'Criação de Lojas',
    description:
    'Lojas virtuais completas prontas para  você começar a vender seus produtos pela internet de forma simples e rápida'
  },
  {
    icon: <IoRocketSharp />,
    name: 'Manutenção e Otimização',
    description:
      'Sites rápidos e otimizados garantem mais cliques e conversões no site e são melhores posicionados pelo google',
  },
  {
    icon: <FaMobileAlt />,
    name: 'Sites Responsivos',
    description:
      'Usamos as melhores tecnologias para que seu site seja acessível por todos os dispositivos',
  },
  {
    icon: <FaStar />,
    name: 'Tecnologias de Ponta',
    description:
      'Trabalhamos com as melhores opções para o desenvolvimento web, soluções altamente usadas e testadas em todo mundo',
  },
  {
    icon: <FaPaintBrush/>,
    name: 'Personalização e Design',
    description:
      'Desenvolvemos seu site de acordo com seu publico alvo, criamos sua logo, banners e identidade visual',
  },

];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contato = [
  
  {
    icon: <FiMail />,
    subtitle: 'alvestech@gmail.com',
    
  },
  {
    icon: <FaWhatsapp />,
    subtitle: '(88) 996147655',
    
  },
  {
    icon: <FiInstagram />,
    subtitle: '@alvestechsistemas',
    
  },
 
];
