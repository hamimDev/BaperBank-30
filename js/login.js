document.getElementById('login-btn').addEventListener('click', function(){
    const emailField = document.getElementById('username');
    const email = emailField.value;
    emailField.value = '';
    // password
    const passwordField = document.getElementById('password');
    const passWord = passwordField.value;
    passwordField.value = '';
    console.log(email , passWord);

    if(email === 'mdhamimhowladerasif@gmail.com' && passWord === '01714977010'){
        window.location.href = 'main-page.html';
    }
    else{
        alert('invalid User');
    }
    
})