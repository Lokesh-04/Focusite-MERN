//onclick logo -> home page direct
const home = document.getElementById("home");
home.addEventListener('click',()=>{
  location.replace("home.html")
})
// music player js
let song=document.getElementById("song")
song.volume = 0.1;

let arr=["audio1.mp3","audio2.mp3","audio3.mp3","audio4.mp3","audio5.mp3"]
let length = arr.length
let i=0
function play(){        
if ( document.getElementById("m_text").innerHTML == "play"){        
document.getElementById("play").setAttribute("class","fa-solid fa-circle-play")     
song.pause()        
document.getElementById("m_text").innerHTML = "pause"    
   }    
else{  document.getElementById("play").setAttribute("class","fa-solid fa-circle-pause")    
song.play()  
document.getElementById("m_text").innerHTML = "play" 
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
  if(document.getElementById("m_text").innerHTML == "pause"){
    document.getElementById("play").setAttribute("class","fa-solid fa-circle-pause")
  }
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
if(document.getElementById("m_text").innerHTML == "pause"){
  document.getElementById("play").setAttribute("class","fa-solid fa-circle-pause")
}
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
  if(start.innerHTML == "Resume"){
    start.innerHTML = "Start"
  }
    if(startTimer === undefined){
      // setinterval is used to execute this code with specific speed 1000 = 1s
      startTimer = setInterval(timer, 1000)
  } else {
      // if this is not mentioned then timer will run fast by clicking start button continuously
      alert("venu timer is already running");
  }

  document.getElementById("toggle").style.left = "0"
  document.getElementById("toggle").classList.add("active")
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
        document.getElementById("toggle").style.left = "100px"
        start.innerHTML = "Start"
        


})

stop.addEventListener('click', function(){
    
    if ( work_minutes != 25 ){
      
    stopInterval()
    startTimer = undefined;
    start.innerHTML = "Resume"
    // document.getElementById("stop")
    document.getElementById("toggle").style.left = "100px"
    }
    
})


//Start Timer Function
function timer(){
    //Work Timer Countdown
    if(work_seconds.innerText != 0){
      if ( work_seconds.innerText <= 10 ) {
        work_seconds.innerText = "0" + (work_seconds.innerText - 1);
        
      } else {
        work_seconds.innerText--;
      }
        
    } else if(work_minutes.innerText != 0 && work_seconds.innerText == 0){
      if ( work_minutes.innerText <= 10 ) {
        work_minutes.innerText = "0" + (work_minutes.innerText - 1);
        
      } else {
        work_minutes.innerText--;
      }
        work_seconds.innerText = 59;
    }

    //Break Timer Countdown
    if(work_minutes.innerText == 0 && work_seconds.innerText == 0){
        document.getElementById("b_time").classList.add("active")
        document.getElementById("w_time").classList.remove("active")
        document.getElementById("body").style.backgroundColor = "#ffffff"
        document.getElementById("nav").style.backgroundColor = "#ffffff"
        document.getElementById("home").style.backgroundColor = "#ffffff"

        if(break_seconds.innerText != 0){
          if ( break_seconds.innerText <= 10 ) {
            break_seconds.innerText = "0" + (break_seconds.innerText - 1);
            
          } else {
            break_seconds.innerText--;
          }

        } else if(break_minutes.innerText != 0 && break_seconds.innerText == 0){
          if ( break_minutes.innerText <= 10 ) {
            break_minutes.innerText = "0" + (break_minutes.innerText - 1);
            
          } else {
            break_minutes.innerText--;
          }
            break_seconds.innerText = 59;
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
        // to teammates......done explaining
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

// window.onload = function(){text.focus()}
plus = document.getElementById("plus")
plus.addEventListener('click',()=>{
    document.getElementById("notes-div").classList.add("active")
    document.getElementById("nav").style.width = "80%"
    document.getElementById("body").style.marginRight = "20%"
    document.getElementById("plus_note").style.display = "none"

})
function noteshide(){
    document.getElementById("notes-div").classList.remove("active")
    document.getElementById("nav").style.width = "100%"
    document.getElementById("body").style.marginRight = "0"
    document.getElementById("plus_note").style.display = "block"
}
function notesopen(){
  const notespage = document.getElementById("arrow");
  notespage.addEventListener('click',()=>{
  location.replace("notes.html")
})

}
// real notes start here
const notesContainer = document.getElementById("notes-main");
const addNoteButton = notesContainer.querySelector(".addnote");
const foot = document.getElementById("foot");


getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content);

  // notesContainer.insertAfter(noteElement, foot);
  notesContainer.insertBefore( noteElement, foot);
});

addNoteButton.addEventListener("click", () => addNote());

//this fun() retrieve all existing notes from localstorage in the clients browser
function getNotes() {
  return JSON.parse(localStorage.getItem("Focusite-notes") || "[]");
}

//take in array of notes and save the new notes in the clients browser
function saveNotes(notes) {
  localStorage.setItem("Focusite-notes", JSON.stringify(notes));
}

//for building html element we provide id and content
//id is a unique identifier for every single notes
function createNoteElement(id, content) {
  const element = document.createElement("textarea")
  // const main = document.createElement("div");

  element.classList.add("note");
  element.value = content;
  // element.autofocus = "autofocus";
  element.placeholder = "Take a note...";

  // main.classList.add("one-note")
  // main.innerHTML = element;

  element.addEventListener("change", () => {
    updateNote(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    const doDelete = confirm(
      "Are you sure you wish to delete this note?"
    );

    if (doDelete) {
      deleteNote(id, element);
    }
  });

  return element;
}


// add note to html and add it to the localstorage 
function addNote() {
  const newnotes = getNotes();
  const noteObject = {
    id: Math.floor(Math.random() * 100000),
    content: ""
  };

  const noteElement = createNoteElement(noteObject.id, noteObject.content);
  notesContainer.insertBefore(noteElement, foot);
  newnotes.push(noteObject);
  saveNotes(newnotes);
}


//update the notes instead of adding new one
function updateNote(id, newContent) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id == id)[0];

  targetNote.content = newContent;
  saveNotes(notes);
}

//to delete note
function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);

  saveNotes(notes);
  notesContainer.removeChild(element);
}


