import './styles/index.css'
import bgImg from './assets/images/main-bg.jpg'

const homeFunction = () => {
    
    // Get the content container from the HTML page
    const content = document.getElementById('content');
    content.style.backgroundImage = `url(${bgImg})`;

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');

    const title = document.createElement('h1');
    title.textContent = 'Lean Cuisine';
    const slogan = document.createElement('p');
    slogan.textContent = 'Premium cuisine at an affordable price';

    mainContainer.appendChild(title);
    mainContainer.appendChild(slogan);

    content.appendChild(mainContainer);
    
}

export { homeFunction };