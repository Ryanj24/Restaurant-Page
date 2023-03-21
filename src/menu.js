import './styles/index.css'
import { navFunction } from './navbar.js'
import { clearFunction } from './clearFunction.js'
import beer from './assets/images/beer.jpg';
import coke from './assets/images/coca-cola.jpg';
import coffee from './assets/images/coffee.jpg';
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

    addDrinks();

    addFood();

    addDesserts();

}


function addDrinks() {
    // Get content div from DOM
    const content = document.getElementById('content');

    const drinks = [beer, coke, coffee, wine];

    const drinksTitlesPrices = [["Beer", "£6.00"], ["Coca-Cola", "£2.50"], ["Coffee", "£3.50"], ["Wine", "4.95"]];


    // Create drinks div
    const drinksDiv = document.createElement('div');
    drinksDiv.classList.add('drinks-container');

    const drinksHeader = document.createElement('h1');
    drinksHeader.textContent = "Drinks";

    drinksDiv.appendChild(drinksHeader);

    const itemsGrid = document.createElement('div');
    itemsGrid.classList.add('items-grid');

    drinksDiv.appendChild(itemsGrid);

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
        itemName.textContent = drinksTitlesPrices[i][0];

        const itemPrice = document.createElement('p');
        itemPrice.textContent = drinksTitlesPrices[i][1];
        itemInfo.appendChild(itemName);
        itemInfo.appendChild(itemPrice);

        itemDiv.appendChild(imgDiv);
        itemDiv.appendChild(itemInfo);

        itemsGrid.appendChild(itemDiv);
    }

    content.appendChild(drinksDiv);
}


function addFood() {
    // Get content div from DOM
    const content = document.getElementById('content');

    const mains = [burger, pizza, sushi, wings];

    const mainsTitlesPrices = [["Cheeseburger", "£8.50"], ["Pizza", "£9.00"], ["Sushi", "£6.00"], ["Chicken Wings", "7.50"]];

    const mainsDiv = document.createElement('div');
    mainsDiv.classList.add('mains-container');

    const mainsHeader = document.createElement('h1');
    mainsHeader.textContent = "Mains";

    mainsDiv.appendChild(mainsHeader);

    const itemsGrid = document.createElement('div');
    itemsGrid.classList.add('items-grid');

    mainsDiv.appendChild(itemsGrid);

    for (let i = 0; i < mains.length; i++) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item-div');

        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img-container');
        const itemImg = document.createElement('img');
        itemImg.src = mains[i];
        imgDiv.appendChild(itemImg);

        const itemInfo = document.createElement('div');
        itemInfo.classList.add('item-info');
        const itemName = document.createElement('h2');
        itemName.textContent = mainsTitlesPrices[i][0];

        const itemPrice = document.createElement('p');
        itemPrice.textContent = mainsTitlesPrices[i][1];
        itemInfo.appendChild(itemName);
        itemInfo.appendChild(itemPrice);

        itemDiv.appendChild(imgDiv);
        itemDiv.appendChild(itemInfo);

        itemsGrid.appendChild(itemDiv);
    }

    content.appendChild(mainsDiv);
}

function addDesserts() {
    // Get content div from DOM
    const content = document.getElementById('content');

    const desserts = [chocCake, iceCream];

    const dessertsTitlesPrices = [["Chocolate Cake", "£5.00"], ["Ice-Cream", "3.50"]];

    const dessertsDiv = document.createElement('div');
    dessertsDiv.classList.add('desserts-container');

    const dessertsHeader = document.createElement('h1');
    dessertsHeader.textContent = "Desserts";

    dessertsDiv.appendChild(dessertsHeader);

    const itemsContainer = document.createElement('div');
    itemsContainer.classList.add('items-container');

    for (let i = 0; i < desserts.length; i++) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item-div');

        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img-container');
        const itemImg = document.createElement('img');
        itemImg.src = desserts[i];
        imgDiv.appendChild(itemImg);

        const itemInfo = document.createElement('div');
        itemInfo.classList.add('item-info');
        const itemName = document.createElement('h2');
        itemName.textContent = dessertsTitlesPrices[i][0];

        const itemPrice = document.createElement('p');
        itemPrice.textContent = dessertsTitlesPrices[i][1];
        itemInfo.appendChild(itemName);
        itemInfo.appendChild(itemPrice);

        itemDiv.appendChild(imgDiv);
        itemDiv.appendChild(itemInfo);

        itemsContainer.appendChild(itemDiv);
        dessertsDiv.appendChild(itemsContainer);
    }

    content.appendChild(dessertsDiv);
}

export { menuFunction };