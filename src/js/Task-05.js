
const refs = {
    input: document.querySelector('input#name-input'),
    nameLabel: document.querySelector('span#name-output'),
} 

refs.input.addEventListener('input', onInputCange);

function onInputCange(event) {
    refs.nameLabel.textContent =
        event.currentTarget.value === '' ?
            'Anonymous' : event.currentTarget.value;
    console.log(event.currentTarget.value);
}