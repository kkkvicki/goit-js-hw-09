const formData = {
  email: '',
  message: '',
};

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const fillInputs = () => {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    emailInput.value = parsedData.email || '';
    messageInput.value = parsedData.message || '';
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
  }
};

window.addEventListener('load', fillInputs);

feedbackForm.addEventListener('input', () => {
  formData.email = emailInput.value.trim();
  formData.message = messageInput.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    feedbackForm.reset();
    formData.email = '';
    formData.message = '';
  }
});
