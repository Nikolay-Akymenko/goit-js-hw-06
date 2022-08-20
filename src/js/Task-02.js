import { galleryItems } from './gallery-items.js';

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


const ingredientsEl = document.querySelector('#ingredients');
const elements = ingredients.map(option => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = option;

    return itemEl;
});

ingredientsEl.append(...elements);
console.log(ingredientsEl);