var cookieprefDOM = document.getElementById("cookiepref");

function responsify(){
	let wwidth = window.innerWidth;
	if(wwidth < 800){
		//body
		document.getElementById('layout-container').style.gridTemplateColumns = '80%'
		document.getElementById('projects').style.gridRow = '1'
		document.getElementById('discord-server').style.gridRow = '4/22'
	
		//form
		document.getElementsByName('email')[0].style.gridColumn = '1/3'
		document.getElementsByName('name')[0].style.gridColumn = '1/3';

		// footer
		document.getElementById("footer").style.alignItems = "flex-start";

		// cookie popup
		cookieprefDOM.style.width = "80%";
		cookieprefDOM.style.left = "10%";
		cookieprefDOM.style.height = "auto";
		cookieprefDOM.style.paddingBottom = "10px";
		cookieprefDOM.style.fontSize = "12px";
		document.getElementById("cookietext1").style.width = "calc(100% - 20px)";
		document.getElementById("cookietext2").style.width = "calc(100% - 20px)";
		document.getElementById("acceptbutton").style.height = "30px";
		document.getElementById("denybutton").style.height = "30px";
		document.getElementById("acceptbutton").style.marginBottom = "4px";
		document.getElementById("cookiebutton").style.left = "calc(50% - 125px)";
		document.getElementById("cookiebutton").style.position = "relative";
		document.getElementById("cookiebutton").style.width = "250px";
		document.getElementById("cookiebutton").style.top = "0px";

		// header
		document.getElementById("langSelector").style.marginTop = "68px";
		document.getElementById("langSelector").style.marginBottom = "20px";
		document.getElementById("navTitleDOM").style.marginTop = "70px";
		document.getElementById("navExternalInternal").style.marginTop = "-50px";
		document.getElementById("navExternalInternal").style.marginLeft = "-180px";
	} else {
		//body
		document.getElementById('layout-container').style = null;
		document.getElementById('projects').style = null;
		document.getElementById('discord-server').style.gridRow = '3 / 20'
	
		//form
		document.getElementsByName('email')[0].style = null;
		document.getElementsByName('name')[0].style = null;

		// footer
		document.getElementById("footer").style = null;

		// cookie popup
		cookieprefDOM.style = null;
		document.getElementById("cookiebutton").style = null;
		document.getElementById("acceptbutton").style = null;
		document.getElementById("denybutton").style = null;
		document.getElementById("cookietext1").style = null;
		document.getElementById("cookietext2").style = null;
	}
}