document.getElementById('registrationForm').addEventListener('submit', function(event) {
    clearErrors();

    let valid = true;

    const username = document.getElementById('username').value;
    if (username.trim() === '') {
        showError('usernameError', 'Username is required.');
        valid = false;
    }

    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('emailError', 'Please enter a valid email address.');
        valid = false;
    }

    const password = document.getElementById('password').value;
    if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters long.');
        valid = false;
    }

    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match.');
        valid = false;
    }

    if (valid) {
        showPopup('successPopup');
        event.preventDefault();
    } else {
        showToast('Please correct the errors in the form.');
        event.preventDefault();
    }
});

function showError(elementId, message) {
    document.getElementById(elementId).innerText = message;
}

function clearErrors() {
    document.querySelectorAll('.error').forEach(function(errorSpan) {
        errorSpan.innerText = '';
    });
}

function showPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000); 
}
