const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
const parsedData = JSON.parse(savedData);
const formEmail = form.elements.email;
const formMessage = form.elements.message;
const throttle = require('lodash.throttle');


updateInputs();

form.addEventListener('input', throttle(saveData, 500));
form.addEventListener('submit', onSubmit);

function saveData() {

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({email: formEmail.value, message: formMessage.value}));
}

function onSubmit(e) {
    e.preventDefault();
    console.log({email: formEmail.value, message: formMessage.value});
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();
}

function updateInputs() {
    if(parsedData === null) {
        formEmail.value = "";
        formMessage.value = "";
    } else {
        formEmail.value = parsedData.email;
        formMessage.value = parsedData.message;
    }  
}