import './styles/index.css'
import bgImg from './assets/images/main-bg.jpg'
import { navFunction } from './navbar.js'

const clearFunction = () => {

    
    const content = document.getElementById('content');

    content.innerHTML = '';
}

export { clearFunction };