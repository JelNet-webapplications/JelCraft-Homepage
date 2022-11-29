function responsify(){
	let wwidth = window.innerWidth;
	if(wwidth < 1200){
		document.getElementById('layout-container').style.gridTemplateColumns = '80%'
		document.getElementById('projects').style.gridRow = '1'
		document.getElementById('discord-server').style.gridRow = '4'
	} else {
		document.getElementById('layout-container').style.gridTemplateColumns = '40% 40%'
		document.getElementById('projects').style.gridRow = '1 / 20'
		document.getElementById('discord-server').style.gridRow = '3 / 20'
	}
}