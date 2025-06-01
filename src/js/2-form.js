const formData = { email: '', message: '' };

const formInputs = document.querySelector('.feedback-form');
const input = document.querySelector("input[name='email']");
const textArea = document.querySelector("textarea[name='message']");

formInputs.addEventListener('input', event => {
  const { name, value } = event.target;
  if (name) {
    formData[name] = value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});

function populateInputs() {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedData) {
    input.value = savedData.email || '';
    textArea.value = savedData.message || '';
    formData.email = savedData.email || '';
    formData.message = savedData.message || '';
  }
}

populateInputs();

formInputs.addEventListener('submit', event => {
  if (input.value === '' || textArea.value === '') {
    return alert('Fill please all fields');
  }
  event.preventDefault();
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
});
