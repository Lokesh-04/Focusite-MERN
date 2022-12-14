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

// form validation 
const n = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (n.value === '' || n.value == null) {
    messages.push('Name is required')
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})