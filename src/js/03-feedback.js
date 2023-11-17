import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const FEEDBACK_FORM_KEY = 'feedback-form-state';
let formData = {};

populateTextarea();

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onFormSubmit);

function onInput(event) {
  formData = {
    email: input.value.trim(),
    message: textarea.value.trim(),
  };
  formData[(event.target.name = event.target.value)];

  localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  let data = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY));

  event.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_KEY);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(FEEDBACK_FORM_KEY);
  if (savedMessage) {
    formData = JSON.parse(savedMessage);
    input.value = formData.email;
    textarea.value = formData.message;
  }
}
