// music player js
let song=document.getElementById("song")
let arr=["audio1.mp3","audio2.mp3","audio3.mp3","audio4.mp3","audio5.mp3"]
let length = arr.length
let i=0
function play(){        
if ( document.getElementById("text").innerHTML == "play"){        
document.getElementById("play").setAttribute("class","fa-solid fa-circle-play")        
song.pause()        
document.getElementById("text").innerHTML = "pause"    
   }    
else{  document.getElementById("play").setAttribute("class","fa-solid fa-circle-pause")    
song.play()  
document.getElementById("text").innerHTML = "play" 
song.onended = function() {
    if ( i == arr.length-1 ){
        i = -1;
    }
    else{
        next()
    }
  };  
// make functions and then call functions 
}
}
function next(){
if ( i == arr.length-1 ){
    i = -1
}
else{
    i=i+1
document.getElementById("song").setAttribute("src",arr[i])    
song=document.getElementById("song")    
song.play()
}
}
function prev(){    
i=i-1
document.getElementById("song").setAttribute("src",arr[i])    
song=document.getElementById("song")    
song.play()
}



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

    // on clicking reset when in break time it should return to starting position
    document.getElementById("b_time").classList.remove("active")
        document.getElementById("w_time").classList.add("active")
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
        work_seconds.innerText = 59;
        work_minutes.innerText--;
    }

    //Break Timer Countdown
    if(work_minutes.innerText == 0 && work_seconds.innerText == 0){
        document.getElementById("b_time").classList.add("active")
        document.getElementById("w_time").classList.remove("active")

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
        document.getElementById("b_time").classList.remove("active")
        document.getElementById("w_time").classList.add("active")
        // newlines
        // added explains these 
        // to teammates
        stopInterval()
        startTimer = undefined;
        // document.getElementById('counter').innerText++;
    }
}

//Stop Timer Function
function stopInterval(){
    // this is to clear the interval set by the function set interval
    clearInterval(startTimer);
}


//notes js
plus = document.getElementById("plus")
plus.addEventListener('click',()=>{
    document.getElementById("notes-div").classList.add("active")
    document.getElementById("header").style.width = "80%"
    document.getElementById("body").style.marginRight = "20%"

})
function noteshide(){
    document.getElementById("notes-div").classList.remove("active")
    document.getElementById("header").style.width = "100%"
    document.getElementById("body").style.marginRight = "0"
    
}
// real notes start here
const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content);
  notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click", () => addNote());

function getNotes() {
  return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}

function saveNotes(notes) {
  localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

function createNoteElement(id, content) {
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.value = content;
  element.placeholder = "Empty Sticky Note";

  element.addEventListener("change", () => {
    updateNote(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    const doDelete = confirm(
      "Are you sure you wish to delete this sticky note?"
    );

    if (doDelete) {
      deleteNote(id, element);
    }
  });

  return element;
}

function addNote() {
  const notes = getNotes();
  const noteObject = {
    id: Math.floor(Math.random() * 100000),
    content: ""
  };

  const noteElement = createNoteElement(noteObject.id, noteObject.content);
  notesContainer.insertBefore(noteElement, addNoteButton);

  notes.push(noteObject);
  saveNotes(notes);
}

function updateNote(id, newContent) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id == id)[0];

  targetNote.content = newContent;
  saveNotes(notes);
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);

  saveNotes(notes);
  notesContainer.removeChild(element);
}
