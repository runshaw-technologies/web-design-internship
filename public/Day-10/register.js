const registerForm = document.querySelector('#registerForm');
registerForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const name = registerForm['name'].value;
    const email = registerForm['email'].value;
    const password = registerForm['password'].value;

    auth.createUserWithEmailAndPassword(email,password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorCode == 'auth/weak-password') {
            alert('The password is weak');
        } else {
            alert(errorMessage);
        }
        throw new Error("Something went wrong");
    }).then(cred=>{
        alert("Register Success!!!");
        registerForm.reset();
    })

})