let canTypeD = false;
document.addEventListener('keydown', event => {
	if(!canTypeD && event.code == 'KeyD'){
		event.preventDefault()
		alert(`nee.`)
		rickroll();
	}
})

var ctrlActive = false,
	uActive = false;

document.addEventListener('keydown', event => {
	if(event.key == 'Control') ctrlActive = true;
	if(ctrlActive == true && event.code == 'KeyU') {
		event.preventDefault()
		rickroll();
	}
})

document.addEventListener('keyup', event => {
	if(event.key == 'Control') ctrlActive = false;
	if(event.code == 'KeyU') uActive = false;
})

const rClickActive = false;

if(rClickActive) {	
	document.addEventListener('contextmenu', event => {
		event.preventDefault()
		rickroll();
	});
}

function rickroll(){
	window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
}
