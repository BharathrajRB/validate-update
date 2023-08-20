const errorDisplay = document.getElementById('errorDisplay');

function validateForm(event) {
  event.preventDefault();
  const form = event.target;
  const inputs = form.querySelectorAll('input');

  clearError();

  inputs.forEach(input => {
    const value = input.value.trim();
    const errorMessages = [];

    switch (input.id) {
      case 'name':
        if (value === '') {
          errorMessages.push('Name cannot be empty.');
        }
        break;

      case 'email':
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value === '') {
          errorMessages.push('Email cannot be empty.');
        } else if (!emailPattern.test(value)) {
          errorMessages.push('Invalid email format.');
        }
        break;

      case 'password':
        if (value === '') {
          errorMessages.push('Password cannot be empty.');
        } else if (value.length < 6) {
          errorMessages.push('Password must be at least 6 characters long.');
        }
        break;
    }

    if (errorMessages.length > 0) {
      showError(input, errorMessages);
    } else {
      showSuccess(input);
    }
  });
}

function showError(input, messages) {
  input.classList.remove('success');
  input.classList.add('error');

  const errorMessage = document.createElement('li');
  errorMessage.innerHTML = messages.join('<br>');
  errorMessage.classList.add('error-message');
  errorDisplay.appendChild(errorMessage);
}

function showSuccess(input) {
  input.classList.remove('error');
  input.classList.add('success');
}

function clearError() {
  errorDisplay.innerHTML = '';
}

function clearFieldStyles(event) {
  const input = event.target;
  input.classList.remove('error');
  input.classList.remove('success');
  clearError();
}