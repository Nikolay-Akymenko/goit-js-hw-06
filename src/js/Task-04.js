
let counterValue = 0;

const refs = {
    btnDecrement: document.querySelector('button[data-action="decrement"]'),
    valueEL: document.querySelector("#value"),
    btnIncrement: document.querySelector('button[data-action="increment"]'),
};

refs.btnDecrement.addEventListener('click', onBtnDecrementClick);
refs.btnIncrement.addEventListener('click', onBtnIncrementClick);

function onBtnDecrementClick() {
    counterValue -= 1;
    console.log(counterValue);
    refs.valueEL.textContent = counterValue;
}

function onBtnIncrementClick() {
    counterValue += 1;
    console.log(counterValue);
    refs.valueEL.textContent = counterValue;
}
