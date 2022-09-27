function doTranslation(lan){
    setFlagBrightness(lan);
    for(temp in translations){
        console.log("%ctranslated element: %c"+temp,"color:orange;","color: lightgray;")
        let id = "Б"+temp, // Б is the identifier used for html elements which need to be translated
            element = document.getElementById(id);
        if(element.innerHTML == null) continue;
        
        /*
        switch(temp){
            case "curtains-projects-void-title":
            case "curtains-projects-void-description":
                for(let i = 1; i < 5; i++){
                    let TBTid = `${id}${i}`;
                    document.getElementById(TBTid).innerHTML = translations[temp][lan];
                }
            case "curtains-contact-emailadress":
            case "curtains-contact-nickname":
            case "curtains-contact-subject":
            case "curtains-contact-message":
                element.placeholder = translations[temp][lan];
            default:
                element.innerHTML = translations[temp][lan];
        }
        */
 
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
    console.log('%cbrightness.flag.'+lan+' has been set to '+document.getElementById(lanid).style.filter,"color: lightgreen;")
    for(let temp of flags){
        if(temp == lan) continue;
        let id = 'flag'+temp;
        document.getElementById(id).style.filter = 'brightness(50%)';
        console.log('%cbrightness.flag.'+temp+' has been set to '+document.getElementById(id).style.filter,"color: green;")
    }
}
