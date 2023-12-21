var screenVersion = 'higher';
function responsify(){
	try{
		if(window.innerWidth < 800){
			if(screenVersion == 'higher'){
				screenVersion = 'lower';
				//body
				qid('layout-container').style.gridTemplateColumns = '80%'
				qid('projects').style.gridRow = '1'
				qid('discord-server').style.gridRow = '4/22'
			
				//form
				document.getElementsByName('email')[0].style.gridColumn = '1/3'
				document.getElementsByName('name')[0].style.gridColumn = '1/3';

				// footer
				qid("footer").style.alignItems = "flex-start";

				// cookie popup
				qid("cookiepref").style.width = "80%";
				qid("cookiepref").style.left = "10%";
				qid("cookiepref").style.height = "auto";
				qid("cookiepref").style.paddingBottom = "10px";
				qid("cookiepref").style.fontSize = "12px";
				qid("Бcookietext1").style.width = "calc(100% - 20px)";
				qid("Бcookietext2").style.width = "calc(100% - 20px)";
				qid("acceptbutton").style.height = "30px";
				qid("denybutton").style.height = "30px";
				qid("acceptbutton").style.marginBottom = "4px";
				qid("cookiebutton").style.left = "calc(50% - 125px)";
				qid("cookiebutton").style.position = "relative";
				qid("cookiebutton").style.width = "250px";
				qid("cookiebutton").style.top = "0px";

				// header
				qid("langSelector").style.marginTop = "68px";
				qid("langSelector").style.marginBottom = "20px";
				qid("navTitleDOM").style.marginTop = "70px";
				qid("navExternalInternal").style.marginTop = "-50px";
				qid("navExternalInternal").style.marginLeft = "-180px";
				qid("header").style.position = "fixed";
			}
		} else if(screenVersion == 'lower'){
			screenVersion = 'higher';
			//body
			qid('layout-container').style = null;
			qid('projects').style = null;
			qid('discord-server').style.gridRow = '3 / 20'
		
			//form
			document.getElementsByName('email')[0].style = null;
			document.getElementsByName('name')[0].style = null;

			// footer
			qid("footer").style = null;

			// cookie popup
			qid("cookiepref").style = null;
			qid("cookiebutton").style = null;
			qid("acceptbutton").style = null;
			qid("denybutton").style = null;
			qid("Бcookietext1").style = null;
			qid("Бcookietext2").style = null;

			// header
			qid("langSelector").style = null;
			qid("navTitleDOM").style = null;
			qid("navExternalInternal").style = null;
		}
	} catch(err){
		console.log(err);
	}
}

function qid(qid){
	return document.getElementById(qid); // qid = query id
	// kon niet element.style doen want dan kreeg ik allemaal errors
}