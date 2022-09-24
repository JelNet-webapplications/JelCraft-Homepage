function dTsC(){
    // checkCookie();
    doTranslation('en');
}

function setCookie(cname,cvalue,exdays) {
    console.debug('setCookie has been called with\n\tname:\t"'+cname+'"\n\tvalue:\t"'+cvalue+'"\n\tdays:\t"'+exdays+'"')
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    console.debug('the cookie "'+cname+'" expires at '+d)
    let expires = "expires=" + d.toUTCString();
    console.debug('let expires = '+expires)
    console.debug('a cookie will be created with\n\t'+cname + "=" + cvalue + ";" + expires + ";path=/")
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}
function createCookie(type, par){
    console.debug('createCookie() has been called with\n\ttype:\t"'+type+'"\n\tpar:\t"'+par+'"')
    if(type == "theme"){
        console.debug('createCookie() has been called for theme: '+type)
        let ctheme = getCookie("COOKIEtheme");
        console.debug('the cookie for "'+type+'" is '+ctheme)
        if(ctheme != ""){
            if(ctheme == 'light') {
                setLight();
                console.debug('MODE HAS BEEN SET TO LIGHT')
            } else {
                setDark();
                console.debug('MODE HAS BEEN SET TO DARK')
            }
            return;
        }
        ctheme = par
        console.debug('ctheme was null, now ctheme is "'+ctheme+'"')
        if(ctheme != "" && ctheme != null){
            setCookie("COOKIEtheme", ctheme, 30);
            console.debug('the cookie is'+getCookie('COOKIEtheme'))
            console.debug('cookie:\t'+document.cookie)
            //createCookie('theme', par)
        }
    }
}
  /*
  function checkCookie() {
    let chosenstring = getCookie("chosenstring");
    if (chosenstring != "") {
      alert("the string you've entered last time is "+chosenstring);
    } else {
        chosenstring = prompt("enter a string","");
       if (chosenstring != "" && chosenstring != null) {
         setCookie("chosenstring", chosenstring, 30);
       }
    }
  }*/