const form = document.querySelector('form');
const fName = document.querySelector('#fName');
const lName = document.querySelector('#lName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleInputs();
})

const handleInputs = () => {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (fName.value == '') {
        setError(fName, "First Name can't be blank");
    }
    else if (fName.value.length <= 5) {
        setError(fName, "Name is too short");
    }
    else {
        setSuccess(fName, "First Name is Valid");
    }

    if (lName.value == '') {
        setError(lName, "Last Name can't be blank");
    }
    else if (lName.value.length <= 5) {
        setError(lName, "Name is too short");
    }
    else {
        setSuccess(lName, "Last Name is Valid");
    }

    if (email.value == '') {
        setError(email, "Email Name can't be blank");
    }
    else if (!email.value.match(mailFormat)) {
        setError(email, "Invalid Format");
    }
    else {
        setSuccess(email, "Email is Valid");
    }

    if (password.value == '') {
        setError(password, "Password can't be blank");
    }
    else if (password.value.length < 10) {
        setError(password, "Password is too short");
    }
    else {
        setSuccess(password, "Password is Valid");
    }

    const errorElement = document.getElementsByClassName('error');
    if (errorElement.length === 0) {
        alert('Your email has been registered!');
        const inputGroup = document.querySelectorAll('.success');
        inputGroup.forEach(input => input.classList.remove('success'));
    } else {
        return;
    }
}

function setError(input, message) {
    const inputElement = input.parentElement;
    inputElement.classList.remove('success');
    inputElement.classList.add('error')

    const errorMsg = inputElement.querySelector('small');
    errorMsg.textContent = message;
}

function setSuccess(input, message) {
    const inputElement = input.parentElement;
    inputElement.classList.remove('error');
    inputElement.classList.add('success')

    const errorMsg = inputElement.querySelector('small');
    errorMsg.textContent = message;
}