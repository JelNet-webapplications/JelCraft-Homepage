function loadPref(){
    if(getCookie('COOKIEpref')) {
        processPref();
    } else {
        console.warn("No cookies found for preference, defaulting to preference form & initiating cookies.")
        document.getElementById('fadescreen').style.display = 'block';
        document.getElementById('cookiepref').style.display = 'block';
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
        accept.style.backgroundColor = 'rgb(33, 147, 33)';
        accept.innerHTML = 'Accept';
        deny.innerHTML = 'Deny';
    }
}

function processPref(){
    console.log("processPref called");
    if(!getCookie('COOKIEpref')) {
        console.warn("No cookies found for preference, defaulting to preference form & initiating cookies.")
        setCookie('COOKIEpref',true,365);
    }
    let elemarr = ['fadescreen','cookiepref'];
    for(let temp of elemarr){
        document.getElementById(temp).style.display = 'none';
    }
    document.getElementsByTagName("*")[0].style.overflow = 'visible';
}