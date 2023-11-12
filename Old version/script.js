// signup and login pages pop-ups

function signuptoggle() {
    let blur=document.getElementById('blur');
    blur.classList.add('active');
    let popup = document.getElementById('signup-box');
    popup.classList.add('active');
}
function logintoggle() {
    let blur=document.getElementById('blur');
    blur.classList.add('active');
    let popup = document.getElementById('login-box');
    popup.classList.add('active');
}

// x-mark code to close login and signup tabs

function signuphide(){
    let remove=document.getElementById('signup-box');
    remove.classList.remove('active');
    let blur=document.getElementById('blur');
    blur.classList.remove('active');
}
function loginhide(){
    let remove=document.getElementById('login-box');
    remove.classList.remove('active');
    let blur=document.getElementById('blur');
    blur.classList.remove('active');
}