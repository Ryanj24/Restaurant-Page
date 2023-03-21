import './styles/index.css'
import { clearFunction } from './clearFunction.js'

const contactFunction = () => {
    clearFunction();

    const content = document.getElementById('content');

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('contact-main-container');

    const contactHeader = document.createElement('h1');
    contactHeader.textContent = "Get in touch!";

    mainContainer.appendChild(contactHeader);
    content.appendChild(mainContainer);

    const phoneContainer = document.createElement('div');
    phoneContainer.classList.add('phone-container');
    const emailContainer = document.createElement('div');
    emailContainer.classList.add('email-container');
    const mapContainer = document.createElement('div');
    mapContainer.classList.add('map-container');

    const phoneHeader = document.createElement('h2');
    const phoneNum = document.createElement('p');
    phoneHeader.textContent = "Phone";
    phoneNum.textContent = "123-456-789";
    phoneContainer.appendChild(phoneHeader);
    phoneContainer.appendChild(phoneNum);

    const emailHeader = document.createElement('h2');
    emailHeader.textContent = "Email";
    const email = document.createElement('p');
    email.textContent = "contact@elitecuisine.com";
    emailContainer.appendChild(emailHeader);
    emailContainer.appendChild(email);


    const mapHeader = document.createElement('h2');
    mapHeader.textContent = "Visit us"
    const map = document.createElement('p');
    map.textContent = "10 Trinity Square, London EC3N 4AJ"
    mapContainer.appendChild(mapHeader);
    mapContainer.appendChild(map);
    

    mainContainer.appendChild(phoneContainer);
    mainContainer.appendChild(emailContainer);
    mainContainer.appendChild(mapContainer);
}

export { contactFunction };