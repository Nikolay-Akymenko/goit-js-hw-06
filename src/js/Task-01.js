import { galleryItems } from './gallery-items.js';
// Change code below this line


const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesEl.length);

categoriesEl.forEach((categories) => {
    console.log('Category:', categories.firstElementChild.textContent);
    console.log('Elements:', categories.lastElementChild.children.length);
})


























// for (const image of images) {
//   const galleryEl = document.querySelector('.gallery');
  
    
//     galleryEl.insertAdjacentHTML('afterbegin',
//         `<li><img src='${image.url}' alt='${image.alt}'></li>`
//     )
    
// }























