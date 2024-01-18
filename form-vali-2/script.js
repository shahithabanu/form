const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

const seterror = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setsuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

var emailcheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        seterror(username, 'Username is required');
    } else {
        setsuccess(username);
    }

    if (emailValue === '') {
        seterror(email, 'Email is required');
    } else if (!emailcheck.test(emailValue)) {
        seterror(email, 'Provide a valid email address');
    } else {
        setsuccess(email);
    }

    if (passwordValue === '') {
        seterror(password, 'Password is required');
    } else if (passwordValue.length < 6 || passwordValue.length > 20) {
        seterror(password, 'Password should be between 6 and 20 characters');
    } else if (passwordValue == 'password')  {
        seterror (password ,'password cant be a password')
    } else {
        setsuccess(password);
    }

    if (password2Value === '') {
        seterror(password2, 'Confirm password is required');
    } else if (password2Value !== passwordValue) {
        seterror(password2, 'Passwords do not match');
    } else {
        setsuccess(password2);
    }
    
};
