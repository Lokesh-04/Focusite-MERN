// music player js
var play=document.getElementById("play")
var next=document.getElementById("next")
var prev=document.getElementById("prev")
let song=document.getElementById("song")
let arr=["audio1.mp3","audio2.mp3","audio3.mp3","audio4.mp3","audio5.mp3"]
let length = arr.length
let i=0
play.addEventListener("click", ()=>{        
if ( document.getElementById("text").innerHTML == "play"){        
document.getElementById("play").setAttribute("class","fa-solid fa-circle-play")        
song.pause()        
document.getElementById("text").innerHTML = "pause"    
   }    
else{  document.getElementById("play").setAttribute("class","fa-solid fa-circle-pause")    
song.play()  
document.getElementById("text").innerHTML = "play"    
    }
})
next.addEventListener("click", ()=>{
if ( i == arr.length-1 ){
    i = -1
}
else{
    i=i+1
// document.getElementById("song").setAttribute("src",arr[i].slice(0,4)+"\\"+arr[i].slice(4,14)+"\\"+arr[i].slice(14))


document.getElementById("song").setAttribute("src",arr[i])    
song=document.getElementById("song")    
song.play()
}
})
prev.addEventListener("click", ()=>{    
i=i-1
document.getElementById("song").setAttribute("src",arr[i])    
song=document.getElementById("song")    
song.play()
})
//pomodoro timer js

// buttons for adding event listeners on click
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

// work timings
var work_minutes = document.getElementById('work_minutes');
var work_seconds = document.getElementById('work_seconds');

// break timings
var break_minutes = document.getElementById('break_minutes');
var break_seconds = document.getElementById('break_seconds');

//store a reference to a timer variable
//when variable is not declared then it will store "undefined"
var startTimer;

start.addEventListener('click', function(){

    if(startTimer === undefined){
        // setinterval is used to execute this code with specific speed 1000 = 1s
        startTimer = setInterval(timer, 1000)
    } else {
        // if this is not mentioned then timer will run fast by clicking start button continuously
        alert("venu timer is already running");
    }
})
reset.addEventListener('click', function(){
    // reset needs to change everything to starting stage
    work_minutes.innerText = 25;
    work_seconds.innerText = "00";

    break_minutes.innerText = 05;
    break_seconds.innerText = "00";

    // document.getElementById('counter').innerText = 0;
    clearInterval(startTimer);
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
    // document.getElementById("stop")
})


//Start Timer Function
function timer(){
    //Work Timer Countdown
    if(work_seconds.innerText != 0){
        work_seconds.innerText--;
    } else if(work_minutes.innerText != 0 && work_seconds.innerText == 0){
        work_seconds.innerText = 2;
        work_minutes.innerText--;
    }

    //Break Timer Countdown
    if(work_minutes.innerText == 0 && work_seconds.innerText == 0){
        doucument.getElementById("b_time").classList.add(" active")
        doucument.getElementById("w_time").classList.remove("active")
        
        if(break_seconds.innerText != 0){
            break_seconds.innerText--;
        } else if(break_minutes.innerText != 0 && break_seconds.innerText == 0){
            break_seconds.innerText = 59;
            break_minutes.innerText--;
        }
    }

    //Increment Counter by one if one full cycle is completed
    if(work_minutes.innerText == 0 && work_seconds.innerText == 0 && break_minutes.innerText == 0 && break_seconds.innerText == 0){
        work_minutes.innerText = 25;
        work_seconds.innerText = "00";

        break_minutes.innerText = 5;
        break_seconds.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}

//Stop Timer Function
function stopInterval(){
    // this is to clear the interval set by the function set interval
    clearInterval(startTimer);
}
