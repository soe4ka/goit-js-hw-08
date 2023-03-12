var _ = require('lodash');
const FEEDBACK_FORM_KEY = 'feedback-form-state';

const email = document.querySelector('input');
const message = document.querySelector('textarea');
const submit = document.querySelector('.feedback-form');

const info = {};

message.addEventListener('input', event => {
  info.message = event.currentTarget.value;
});
email.addEventListener('input', event => {
  info.email = event.currentTarget.value;
});

function setInfo() {
  localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(info));
}
message.addEventListener('input', _.throttle(setInfo, 500));
email.addEventListener('input', _.throttle(setInfo, 500));

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  const formObj = {
    Email: email.value,
    Message: message.value,
  };
  console.log(formObj);
  event.currentTarget.reset();
  localStorage.clear();
}

submit.addEventListener('submit', handleSubmit);

if (localStorage.getItem(FEEDBACK_FORM_KEY)) {
  if (JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY)).email) {
    email.value = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY)).email;
  }
  if (JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY)).message) {
    message.value = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY)).message;
  }
}
