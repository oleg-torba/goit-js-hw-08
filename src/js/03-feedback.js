import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textArea = document.querySelector('.feedback-form textarea');
const email = document.querySelector('.feedback-form input');

form.addEventListener('submit', onFormSubmit);
textArea.addEventListener('input', throttle(onTextAreaInput, 1000));
email.addEventListener('input', throttle(onTextAreaInput, 1000));
populateTextArea();

function onTextAreaInput(evt) {
  const message = evt.target.value;
  localStorage.setItem('feedback-form-state', message);
  console.log(message);
}

function onFormSubmit(evt) {
  evt.preventDefault();
}

function populateTextArea() {
  const saveMessage = localStorage.getItem('feedback-from-state');
  if (saveMessage) {
    textArea.value = saveMessage;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

const formData = JSON.parse(localStorage.getItem('feedback-form-state')){};
form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
});
