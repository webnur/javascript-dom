
document.getElementById('login-button').addEventListener('click', function(){

    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // get User Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;


    // check email and password
    if(userEmail == 'sontan@bap.com' && userPassword == 'secret'){
        window.location.href = 'banking.html'
    }else{
        alert('Plese Enter Valid Email and Password')
    }

})



