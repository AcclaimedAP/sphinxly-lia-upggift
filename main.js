function checkArray(array, value) {
    return array.some((arrVal) => value === arrVal);
}

function checkHistory(username) {
    const usernames = JSON.parse(localStorage.getItem("usernames"));
    if (usernames && usernames.length >= 1) {
        if (checkArray(usernames, username)) {
            return true;
        }
        usernames.push(username);
        localStorage.setItem("usernames", JSON.stringify(usernames));
        return false;

    } else {
        let newUser = [];
        newUser.push(username);
        console.log('creating usernames localstorage')
        localStorage.setItem('usernames', JSON.stringify(newUser));
        return false;
    }
}


function toggleLoginForm() {
    const form = document.getElementById('formLogin');
    form.classList.toggle('hidden');
}

function Login(username) {
    const btnOpenLogin = document.getElementById('btnOpenLogin');
    const pLoginMessage = document.getElementById('pLoginMessage');
    btnOpenLogin.removeEventListener('click', toggleLoginForm);
    toggleLoginForm();
    pLoginMessage.innerHTML = `Du är inloggad som <strong>${username}</strong>`
    pLoginMessage.classList.remove('hidden');
}

function ThrowError() {
    const pLoginError = document.getElementById('pLoginError');
    pLoginError.classList.remove('hidden');
}

function attemptLogin(event) {
    event.preventDefault();
    const username = document.getElementById('txtInputName').value;
    if (username) {
        Login(username);
    } else {
        ThrowError();
    }
}

function init() {
    const btnOpenLogin = document.getElementById('btnOpenLogin');
    const btnCloseForm = document.getElementById('btnCloseForm');
    const btnLogin = document.getElementById('btnLogin');

    btnOpenLogin.addEventListener('click', toggleLoginForm);
    btnCloseForm.addEventListener('click', toggleLoginForm);

    btnLogin.addEventListener('click', attemptLogin);
}

    
init();

localStorage.clear();