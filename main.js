function toggleLoginForm() {
    const form = document.getElementById('formLogin');
    form.classList.toggle('hidden');
}

function Login() {
    
    toggleLoginForm();
}

function ThrowError() {
    const pLoginError = document.getElementById('pLoginError');
    pLoginError.classList.remove('hidden');
}

function attemptLogin(event) {
    event.preventDefault();
    const username = document.getElementById('txtInputName').value;
    if (username) {
        Login();
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