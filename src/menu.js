import './styles/index.css'
import { navFunction } from './navbar.js'
import { clearFunction } from './clearFunction.js'
import bgImg from './assets/images/main-bg.jpg';
import beer from './assets/images/beer.jpg';
import coke from './assets/images/coca-cola.jpg';
import wine from './assets/images/wine.jpg';
import burger from './assets/images/cheeseburger.jpg';
import pizza from './assets/images/pizza.jpg';
import sushi from './assets/images/sushi.jpg';
import wings from './assets/images/wings.jpg';
import chocCake from './assets/images/choc-cake.jpg';
import iceCream from './assets/images/ice-cream.jpg';

const menuFunction = () => {

    navFunction();
    clearFunction();

    document.body.style.backgroundImage = `url(${bgImg})`;

    // Get content div from DOM
    const content = document.getElementById('content');

    const drinks = [beer, coke, wine];
    const mains = [burger, pizza, sushi, wings];
    const desserts = [chocCake, iceCream];

    const drinksTitles = ["Beer", "Coca-Cola", "Wine"];
    const mainsTitles = ["Cheeseburger", "Pizza", "Sushi", "Chicken Wings"];
    const dessertsTitles = ["Chocolate Fudge Cake", "Ice-Cream"];

    const drinksPrices = ["£6.00", "£2.50", "£4.95"];
    const mainsPrices = ["£8.50", "£9.00", "£6.00", "£7.50"];
    const dessertsPrices = ["£5.00", "£3.50"];

    // Create drinks div
    const drinksDiv = document.createElement('div');
    drinksDiv.classList.add('drinks-container');

    const drinksHeader = document.createElement('h1');
    drinksHeader.textContent = "Drinks";

    drinksDiv.appendChild(drinksHeader);

    for (let i = 0; i < drinks.length; i++) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item-div');

        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img-container');
        const itemImg = document.createElement('img');
        itemImg.src = drinks[i];
        imgDiv.appendChild(itemImg);

        const itemInfo = document.createElement('div');
        itemInfo.classList.add('item-info');
        const itemName = document.createElement('h2');
        itemName.textContent = drinksTitles[i];

        const itemPrice = document.createElement('p');
        itemPrice.textContent = drinksPrices[i];
        itemInfo.appendChild(itemName);
        itemInfo.appendChild(itemPrice);

        itemDiv.appendChild(imgDiv);
        itemDiv.appendChild(itemInfo);

        drinksDiv.appendChild(itemDiv);
    }

    content.appendChild(drinksDiv);
}

export { menuFunction };