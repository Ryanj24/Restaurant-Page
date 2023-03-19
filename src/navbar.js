import './styles/index.css'

const navFunction = () => {

    // Select the content DOM element
    const content = document.getElementById('content');

    // create navbar container
    const container = document.createElement('div');
    container.classList.add('navbar');

    // Create the logo element containing restaurant name
    const logo = document.createElement('h1');
    logo.textContent = 'Lean Cuisine';

    // Add logo to the container
    container.appendChild(logo);

    // Create array of the links to different pages
    let navitems = ['Home', 'About', 'Menu', "Contact"];

    // Create the ul element that will house the nav links
    const navlist = document.createElement('ul');
    navlist.classList.add('navigation');

    // Loop through the array created above
    for (let i = 0; i < navitems.length; i++) {

        // Create li element
        const listItem = document.createElement('li');
        listItem.classList.add('nav-link');

        // Create <a> element to nest within li
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = navitems[i];

        // Nest <a> element within li element
        listItem.appendChild(link);

        // Add li element to ul
        navlist.appendChild(listItem);
    }

    // Append ul to the container and then append the container to the DOM
    container.appendChild(navlist);
    content.appendChild(container);

};

export { navFunction };