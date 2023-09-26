
const form = document.querySelector('#form');
const message = document.querySelector('#message');




form.addEventListener('submit', (e) => {
  e.preventDefault();

  validateForm();
});




let isValid = false;

const validateForm = () => {
  isValid = form.checkValidity();
  console.log(isValid);
  if (!isValid) {
    message.textContent = 'Please fill out all fields';
    message.style.color = 'red';
  }
}