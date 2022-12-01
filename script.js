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
// pomodoro-timer with start and some buttons

let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');

let workTime = 25;
let breakTime = 5;

let seconds = "00"

// display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTitle.classList.add('active');
}

// start timer
function start() {
    // change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    // change the time
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    // countdown
    let timerFunction = () => {
        //change the display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        // start
        seconds = seconds - 1;

        if(seconds === 0) {
            workMinutes = workMinutes - 1;
            if(workMinutes === -1 ){
                if(breakCount % 2 === 0) {
                    // start break
                    workMinutes = breakMinutes;
                    breakCount++

                    // change the painel
                    workTitle.classList.remove('active');
                    breakTitle.classList.add('active');
                }else {
                    // continue work
                    workMinutes = workTime;
                    breakCount++

                    // change the painel
                    breakTitle.classList.remove('active');
                    workTitle.classList.add('active');
                }
            }
            seconds = 59;
        }
    }

    // start countdown
    setInterval(timerFunction, 1000); // 1000 = 1s
}