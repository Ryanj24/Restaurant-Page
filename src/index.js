import { homeFunction } from './home.js';
import bgImg from './assets/images/main-bg.jpg';
import { navFunction } from './navbar.js';

document.body.style.backgroundImage = `url(${bgImg})`;
navFunction();
homeFunction();
