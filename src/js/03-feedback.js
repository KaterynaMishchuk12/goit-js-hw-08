import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
// const submitButton = document.querySelector('button');

const FEEDBACK_FORM_KEY = 'feedback-form-state';
populateTextarea();
form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onFormSubmit);

function onInput(event) {
  const message = event.target.value;
  //   const data = {
  //     email: email.value.trim(),
  //     message: message.value.trim(),
  //   };
  localStorage.setItem(FEEDBACK_FORM_KEY, message);
}

function onFormSubmit(event) {
  event.preventDefault();
  //   const { email, message } = event.currentTarget.elements;
  //   console.log({ email: email.value, message: message.value });
  event.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_KEY);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(FEEDBACK_FORM_KEY);
  if (savedMessage) {
    textarea.value = savedMessage;
  }
}
