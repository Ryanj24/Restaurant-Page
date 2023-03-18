import './styles/index.css'
import background from './assets/images/main-bg.jpg'


const div = document.getElementById('content');

const head = document.createElement('h1');
head.textContent = 'Webpack App';

div.appendChild(head);

div.style.backgroundImage = `url(${background})`;