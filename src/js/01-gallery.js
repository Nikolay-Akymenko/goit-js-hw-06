import { galleryItems } from './gallery-items.js';
// Change code below this line

//* Задача №1

// const categoriesEl = document.querySelectorAll('.item');
// console.log('Number of categories:', categoriesEl.length);

// categoriesEl.forEach((categories) => {
//     console.log('Category:', categories.firstElementChild.textContent);
//     console.log('Elements:', categories.lastElementChild.children.length);
// })


//* Задача №2

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// const ingredientsEl = document.querySelector('#ingredients');
// const elements = ingredients.map(option => {
//     const itemEl = document.createElement('li');
//     itemEl.classList.add('item');
//     itemEl.textContent = option;

//     return itemEl;
// });

// ingredientsEl.append(...elements);
// console.log(ingredientsEl);


//* Задача №3

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

for (const image of images) {
    const galleryEl = document.querySelector('.gallery');
    
    galleryEl.insertAdjacentHTML('afterbegin',
        `<li><img src='${image.url}' alt='${image.alt}'></li>`
    )
    
}























