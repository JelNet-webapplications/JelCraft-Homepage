function responsify(){
	let wwidth = window.innerWidth;
	if(wwidth < 1200){
		//body
		document.getElementById('layout-container').style.gridTemplateColumns = '80%'
		document.getElementById('projects').style.gridRow = '1'
		document.getElementById('discord-server').style.gridRow = '4'
	
		//form
		document.getElementsByName('email')[0].style.gridColumn = '1/3'
		document.getElementsByName('name')[0].style.gridColumn = '1/3'
	} else {
		//body
		document.getElementById('layout-container').style.gridTemplateColumns = '40% 40%'
		document.getElementById('projects').style.gridRow = '1 / 20'
		document.getElementById('discord-server').style.gridRow = '3 / 20'
	
		//form
		document.getElementsByName('email')[0].style.gridColumn = ''
		document.getElementsByName('name')[0].style.gridColumn = ''
	}
}