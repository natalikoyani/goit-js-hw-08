const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
const parsedData = JSON.parse(savedData);


updateInputs();

form.addEventListener('input', saveData);
form.addEventListener('submit', onSubmit);

function saveData() {

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({email: form.elements.email.value, message: form.elements.message.value}));
}

function onSubmit() {
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form(reset);
}

function updateInputs() {
    if(parsedData === null) {
        form.elements.email.value = "";
        form.elements.message.value = "";
    } else {
        form.elements.email.value = parsedData.email;
        form.elements.message.value = parsedData.message;
    }  
}