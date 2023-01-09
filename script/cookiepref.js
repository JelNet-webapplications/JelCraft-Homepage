function loadPref(){
    if(getCookie('COOKIEpref')) {
        processPref();
    } else {/* TERING POPUP IK BEN ER HELEMAAL KLAAR MEE
        console.warn("No cookies found for preference, defaulting to preference form & initiating cookies.")
        document.getElementById('fadescreen').style.display = 'block';
        document.getElementById('cookiepref').style.display = 'block';
        //disable scrolling
        document.body.style.overflow = "hidden";*/
        processPref();
    }
}

function swapButtons(boolean){
    let accept = document.getElementById('acceptbutton'),
        deny = document.getElementById('denybutton');
    if(boolean){
        accept.style.backgroundColor = 'rgb(214, 7, 7)';
        accept.innerHTML = 'Deny';
        deny.innerHTML = 'Accept';
    } else {
        accept.style.backgroundColor = ''
        accept.innerHTML = 'Accept';
        deny.innerHTML = 'Deny';
    }
}

let mobHasPressed = false; // mob = 'mobile'
function processPref(){
    console.log("processPref() has been called for\n\tCOOKIEpref:\t"+getCookie("COOKIEpref")+'\n\tmobHasPressed:\t'+mobHasPressed);
    if(window.innerWidth < 700 && !mobHasPressed){
        document.getElementById('denybutton').style.display = 'none';
        mobHasPressed = true;
        return;
    }
    if(!getCookie('COOKIEpref')) {
        console.warn("No cookies found for preference, defaulting to preference form & initiating cookies.")
        setCookie('COOKIEpref',true,365);
    }
    let elemarr = ['fadescreen','cookiepref'];
    for(let temp of elemarr){
        document.getElementById(temp).style.display = 'none';
    }

    document.getElementById("header").style.position = "fixed";
    //enable scrolling
    document.body.style.overflow = "visible";
}