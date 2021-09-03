const registerForm = document.querySelector('#register-form');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user data from the form
    const email = registerForm['email'].value;
    const password = registerForm['password'].value;

    auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
            registerForm.reset();
        } else if(errorCode == 'auth/email-already-in-use') {
            alert('This email already exists.');
            registerForm.reset();
        } else if(errorCode == 'auth/invalid-email') {
            alert('Please enter valid email id.');
            registerForm.reset();
        } else {
            alert(errorMessage);
        }
        throw new Error("Something went wrong");

    }).then(cred => {
        alert("Registration Completed!!!");
        registerForm.reset();
    })
})