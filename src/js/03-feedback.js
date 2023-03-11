var _ = require('lodash');

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
  localStorage.setItem('feedback-form-state', JSON.stringify(info));
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

if (localStorage.length !== 0) {
  email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
  message.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
}
