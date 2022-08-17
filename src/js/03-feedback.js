const form = document.querySelector('.feedback-form');
const textArea = document.querySelector('.feedback-form textarea');
const email = document.querySelector('.feedback-form input');

form.addEventListener('submit', onFormSubmit);
textArea.addEventListener('input', onTextAreaInput);
email.addEventListener('input', onTextAreaInput);
populateTextArea();

function onTextAreaInput(evt) {
  const message = evt.currentTarget.value;
  localStorage.setItem('feedback-form-state', message);
  console.log(message);
}

function onFormSubmit(evt) {
  evt.preventDefault();
}

function populateTextArea() {
  const saveMessage = localStorage.getItem('feedback-from-state');
}
