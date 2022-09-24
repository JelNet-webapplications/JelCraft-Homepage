function doTranslation(lan){
    setFlagBrightness(lan);
    for(temp in translations){
        console.log("translated element: "+temp)
        let id = "Б"+temp; // Б is the identifier used for html elements which need to be translated
            element = document.getElementById(id);
        if(temp == "To_be_determined" || temp == "Nonapplicable"){
            for(let i = 2; i < 6; i++){
                let TBTid = `${id}${i}`;
                element.innerHTML = translations[temp][lan];
            }
        }
        else if(temp == 'Email_Address' || temp == 'Nickname' || temp == 'Subject' || temp == 'Message'){
            element.placeholder = translations[temp][lan];
        } else {
            element.innerHTML = translations[temp][lan];
        }
    }
}

var flags = ['en', 'de', 'nl', 'fr', 'vk'];
function setFlagBrightness(lan){
    let lanid = 'flag'+lan;
    document.getElementById(lanid).style.filter = 'brightness(100%)'
    console.log('brightness.flag.'+lan+' has been set to '+document.getElementById(lanid).style.filter)
    for(let temp of flags){
        if(temp == lan) continue;
        let id = 'flag'+temp;
        document.getElementById(id).style.filter = 'brightness(50%)';
        console.log('brightness.flag.'+temp+' has been set to '+document.getElementById(id).style.filter)
    }
}
