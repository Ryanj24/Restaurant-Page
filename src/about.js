import './styles/index.css'
import { navFunction } from './navbar.js'
import { clearFunction } from './clearFunction.js'

const aboutFunction = () => {
    navFunction();
    clearFunction();

    const content = document.getElementById('content');

    const mainContainer = document.createElement('div');
    mainContainer.innerHTML = "Hello World";

    content.appendChild(mainContainer);
}

export { aboutFunction };