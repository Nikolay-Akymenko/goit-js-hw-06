//  <form class="login-form">
//     <label>
//         Email
//         <input type="email" name="email" />
//     </label>
//     <label>
//         Password
//         <input type="password" name="password" />
//     </label>
//     <button type="submit">Login</button>
// </form>
 
 
const form = document.querySelector('.login-form');
 
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (mail === "" || password === "") {
        return alert('Заполни форму');
    }

    console.log('email:', mail, 'password:', password);
    event.currentTarget.reset();

}


