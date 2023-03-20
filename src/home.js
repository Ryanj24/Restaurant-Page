import './styles/index.css'
import bgImg from './assets/images/main-bg.jpg'
import { navFunction } from './navbar.js'
import { clearFunction } from './clearFunction.js'

const homeFunction = () => {
    
    // Call navFunction to set the navbar at the top of the page
    navFunction();

    clearFunction();

    // Get the content container from the HTML page & set the background image
    const content = document.getElementById('content');

    document.body.style.backgroundImage = `url(${bgImg})`;
    
    //content.style.backgroundImage = `url(${bgImg})`;

    // Create a div to hold the slogan
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('home-main-container');

    // Add slogan to the div created
    const slogan = document.createElement('p');
    slogan.textContent = 'Premium cuisine at an affordable price';

    // Append the slogan to the container
    mainContainer.appendChild(slogan);

    // Append the container to the DOM
    content.appendChild(mainContainer);
    
}

export { homeFunction };