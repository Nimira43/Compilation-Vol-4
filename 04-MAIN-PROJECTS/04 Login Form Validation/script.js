const showPasswordIcon = document.querySelector('i.fa-eye');
const loginPassword = document.getElementById('loginPassword');
const loginUsername = document.getElementById('loginUsername');
const loginContainer = document.querySelector('.login-container');
const loginForm = document.getElementById('loginForm')

showPasswordIcon.addEventListener('click', showPassword);

function showPassword() {
    if (loginPassword.type === 'password') {
        loginPassword.type = 'text';
        showPasswordIcon.style.color = 'orangered';
        
    } else {
        loginPassword.type = 'password';
        showPasswordIcon.style.color = 'green';
    }
}

loginForm.addEventListener('submit', submitValidation);

function submitValidation(event) {
    event.preventDefault();
    if (loginUsername.value === '' || loginUsername.value.length < 3) {
        showError(loginUsername, 'Username cannot be empty and must be 3 characters or more.');
    } else {
        showSuccess(loginUsername);
    }

    if (loginPassword.value === '' || loginPassword.value.length < 6) {
        showError(loginPassword, 'Password is required and must be 8 characters or more.');
    } else {
        showSuccess(loginUsername);
    }
}

function showError(input, message) {
    const formField = input.parentElement;
    formField.className = 'form-field error';
    if ((formField.className = 'form-field error')) {
        const alert_message = formField.querySelector('.alert-message');
        alert_message.style.visibility = 'visible';
        alert_message.style.color = 'red';
        alert_message.innerText = message;
    } 
}

function showSuccess(input) {
    const formField = input.parentElement;
    formField.className = 'form-field success';
    if (formField.className = 'form-field success') {
        const alert_message = formField.querySelector('.alert-message');
        alert_message.style.visibility = 'hidden';
    }
}

const requestForm = document.querySelector('.form-request');

requestForm.style.display = 'none';

const showRequestForm = document.querySelector('.reset-password');

showRequestForm.addEventListener('click', (e) => {
    e.preventDefault();
    if (requestForm.style.display !== 'block') {
        loginContainer.style.minHeight = '650px';
        requestForm.style.display = 'block';
    } else {
        requestForm.style.display = 'none';
        loginContainer.style.minHeight = 'initial';
    }
})

requestForm.addEventListener('submit', request);

function request(e) {
    e.preventDefault()

    if (requestForm.style.display === 'block') {
        const requestEmail = document.getElementById('requestEmail');
        if (requestEmail.value === '') {
            showError(requestEmail, 'Email required')
        } else {
            showSuccess(requestEmail);
        }
    }
}