import './styles/index.css'
import { homeFunction } from './home.js';
import { aboutFunction } from './about.js';
import { menuFunction } from './menu.js';
import { contactFunction } from './contact.js';

const navFunction = () => {

    // Select the content DOM element
    const content = document.getElementById('content');

    // create navbar container
    const container = document.createElement('div');
    container.classList.add('navbar');

    document.body.insertBefore(container, document.body.firstChild);

    // Create the logo element containing restaurant name
    const logo = document.createElement('h1');
    logo.textContent = 'Elite Cuisine';

    // Add logo to the container
    container.appendChild(logo);

    // Create array of the links to different pages
    let navitems = ['Home', 'About', 'Menu', "Contact"];
    let list = ["home", "about", "menu", "contact"];

    // Create the ul element that will house the nav links
    const navlist = document.createElement('ul');
    navlist.classList.add('navigation');

    // Loop through the array created above
    for (let i = 0; i < navitems.length; i++) {

        // Create li element
        const listItem = document.createElement('li');
        listItem.classList.add('nav-link');

        // Create buttons to serve as nav links
        const link = document.createElement('button');
        link.textContent = navitems[i];
        link.classList.add(`${list[i]}` + "-button");

        // Nest <a> element within li element
        listItem.appendChild(link);

        // Add li element to ul
        navlist.appendChild(listItem);
    }



    // Append ul to the container and then append the container to the DOM
    container.appendChild(navlist);

    const homeButton = document.querySelector('.home-button');
    const aboutButton = document.querySelector('.about-button');
    const menuButton = document.querySelector('.menu-button');
    const contactButton = document.querySelector('.contact-button');

    homeButton.addEventListener("click", homeFunction);
    aboutButton.addEventListener("click", aboutFunction);
    menuButton.addEventListener("click", menuFunction);
    contactButton.addEventListener("click", contactFunction);
    
};



export { navFunction };