// setInterval(laathetwerken, 2000)
// function laathetwerken(){
//   document.getElementById("worldstatstitle").style.left = window.innerWidth * 0.02;
//   console.log('worldstatstitle left: '+document.getElementById("worldstatstitle").style.left)
//   console.log('function laathetwerken has succesfully been executed. ')
// }
// setInterval(testforMobile, 1)
//konkerbonker konkerbonker

function testforMobile(){
  if(window.innerWidth < 861) {
    // window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      document.getElementById("html").style.display = 'none';
      document.getElementById("notifyPhone").style.display = 'block';
      // console.log(document.getElementById("notifyPhone").style.display);
  } else {
      document.getElementById("html").style.display = 'block';
      document.getElementById("notifyPhone").style.display = 'none';
      // console.log(document.getElementById("notifyPhone").style.display);
  }

}
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
    //console.log(translations.HOME.nl)
    // window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});
