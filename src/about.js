import './styles/index.css'
import { navFunction } from './navbar.js'
import { clearFunction } from './clearFunction.js'
import bgImg from './assets/images/main-bg.jpg';

const aboutFunction = () => {
    navFunction();
    clearFunction();

    document.body.style.backgroundImage = `url(${bgImg})`;
    const content = document.getElementById('content');

    const mainContainer = document.createElement('div');
    mainContainer.innerHTML = "Hello World";

    content.appendChild(mainContainer);
}

export { aboutFunction };