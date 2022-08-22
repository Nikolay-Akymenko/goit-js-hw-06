/* <div class="widget">
    <p>Background color: <span class="color">-</span></p>
    <button type="button" class="change-color">Change color</button>
</div> */

const buttonRef = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

buttonRef.addEventListener('click', () => {
  spanEl.textContent = getRandomHexColor();
  document.body.setAttribute(
    'style',
    'background-color: ' + spanEl.textContent
  );
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
        .padStart(6, 0)}`;
    
    
}
console.log(document.body.style.backgroundColor);