import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const LOCALSTORAGE_KEY = 'feedback-form-state';
const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
const parsedData = JSON.parse(savedData);
const formEmail = form.elements.email;
const formMessage = form.elements.message;



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
    try{
        formEmail.value = parsedData.email ?? "";
        formMessage.value = parsedData.message ?? "";
    } catch(err) {
        console.log(err);
    }
}