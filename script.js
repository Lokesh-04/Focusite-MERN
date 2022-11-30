// play button change to pause
// function play(){




//     document.getElementById("pa").setAttribute("class","fa-solid fa-circle-pause")
//     document.getElementById("pa").innerHTML="pause"
// }

// signup and login pages pop-ups

function signuptoggle() {
    let blur=document.getElementById('blur');
    blur.classList.toggle('active');
    let popup = document.getElementById('signup-box');
    popup.classList.toggle('active');
}
function logintoggle() {
    let blur=document.getElementById('blur');
    blur.classList.add('active');
    let popup = document.getElementById('login-box');
    popup.classList.add('active');
}

// x-mark code to close login or signup tabs

function hide(){
    let x=document.getElementById('x-mark');
    x.classList.remove('active');
}