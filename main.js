function toggleLoginForm() {
    const form = document.getElementById('formLogin');
    form.classList.toggle('hidden');
}

function init() {
    const btnOpenLogin = document.getElementById('btnOpenLogin');
    const btnCloseForm = document.getElementById('btnCloseForm');



    btnOpenLogin.addEventListener('click', toggleLoginForm);
    btnCloseForm.addEventListener('click', toggleLoginForm);
}


init();