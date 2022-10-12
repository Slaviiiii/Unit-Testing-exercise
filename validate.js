function validate() {
    let email = document.getElementById('email');
    email.addEventListener('change', onChange)
    let pattern = new RegExp('^[a-z]+@[a-z]+\\.[a-z]+');

    function onChange(e) {
        if (pattern.test(email.value)) {
            email.classList.remove('error');
        } else {
            email.classList.add('error');
        }
    }
} 