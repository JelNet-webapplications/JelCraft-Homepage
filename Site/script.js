function dosomething(){
    window.open('https://www.youtube.com/watch?v=Lxqc5mSg4vw');
}

document.body.addEventListener('keydown', event => {
    if(event.code == 'KeyD'){
      event.preventDefault()
      alert(`GEEN DEAN`)
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
})

var ctrlActive = false,
    uActive = false;

document.body.addEventListener('keyup', event => {
  if(event.key == 'Control') ctrlActive = false;
  if(event.code == 'KeyU') uActive = false;
})

document.body.addEventListener('keydown', event => {
  if(event.key == 'Control') ctrlActive = true;
  if(ctrlActive == true && event.code == 'KeyU') {
    event.preventDefault()
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }
})

document.addEventListener('contextmenu', event => {
    event.preventDefault()
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});