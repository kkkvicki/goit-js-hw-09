const formData = {
  email: '',
  message: '',
};

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const storedData = localStorage.getItem('feedback-form-state');
if (storedData) {
  const parsedData = JSON.parse(storedData);
  emailInput.value = parsedData.email;
  messageInput.value = parsedData.message;
}

feedbackForm.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
  }
});
