import './styles/index.css'
import { navFunction } from './navbar.js'
import { clearFunction } from './clearFunction.js'
import exteriorPicture from './assets/images/exterior.jpg';
import hands from './assets/images/chefHands.jpg';

const aboutFunction = () => {


    // Clear any previous content on the page to load the about page content
    clearFunction();

    // Get the content div from the DOM
    const content = document.getElementById('content');

    // Create container to house about page content and assign class about-main-container
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('about-main-container');
    
    // Create Header
    const aboutHeader = document.createElement('h1');
    aboutHeader.textContent = "Our Story";
    mainContainer.appendChild(aboutHeader);

    const infoSection = document.createElement('section');
    infoSection.classList.add('info-section');

    const group1 = document.createElement('div');
    group1.classList.add('group1');
    const group2 = document.createElement('div');
    group2.classList.add('group2');


    const group1Info = document.createElement('div');
    group1Info.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis vitae ipsum nec ullamcorper. In at sapien sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas placerat ipsum lectus. Nam nisi leo, dictum ornare orci non, consectetur malesuada felis. Sed ut ex dapibus, commodo nulla vitae, vestibulum justo. Praesent consequat venenatis velit id placerat. Pellentesque purus magna, imperdiet in sem vel, faucibus fermentum est. Nulla facilisi. Integer eleifend a libero sed facilisis. Nam efficitur ipsum vitae mollis vehicula. Vivamus congue scelerisque sem, eu elementum.";
    group1Info.classList.add('info');
    group1.appendChild(group1Info);

    const group1PictureDiv = document.createElement('div');
    group1PictureDiv.classList.add('picture-div');
    const group1Picture = document.createElement('img');
    group1Picture.src = exteriorPicture;
    group1PictureDiv.appendChild(group1Picture);
    group1.appendChild(group1PictureDiv);



    const group2PictureDiv = document.createElement('div');
    group2PictureDiv.classList.add('picture-div');
    const group2Picture = document.createElement('img');
    group2Picture.src = hands;
    group2PictureDiv.appendChild(group2Picture);
    group2.appendChild(group2PictureDiv);
    
    const group2Info = document.createElement('div');
    group2Info.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis vitae ipsum nec ullamcorper. In at sapien sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas placerat ipsum lectus. Nam nisi leo, dictum ornare orci non, consectetur malesuada felis. Sed ut ex dapibus, commodo nulla vitae, vestibulum justo. Praesent consequat venenatis velit id placerat. Pellentesque purus magna, imperdiet in sem vel, faucibus fermentum est. Nulla facilisi. Integer eleifend a libero sed facilisis. Nam efficitur ipsum vitae mollis vehicula. Vivamus congue scelerisque sem, eu elementum.";
    group2Info.classList.add('info');
    group2.appendChild(group2Info);

    
    
    
    infoSection.appendChild(group1);
    infoSection.appendChild(group2);
    mainContainer.appendChild(infoSection);



    content.appendChild(mainContainer);
}

export { aboutFunction };