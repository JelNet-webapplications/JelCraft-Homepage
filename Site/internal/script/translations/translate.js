function doTranslation(lan){
    let navbarHomeSquare = document.getElementsByClassName('left')[0].style;
    
    if(lan == 'vk'){
        navbarHomeSquare.width = '150px';
    } else {
        navbarHomeSquare.width = '100px';
    }
    setFlagBrightness(lan);
    for(temp in translations){
        try{
            let id = "Б"+temp, // Б is the identifier used for html elements which need to be translated
            element = document.getElementById(id);
            switch(temp){
                case "curtains-projects-void-title":
                case "curtains-projects-void-description":
                    for(let i = 1; i < 7; i++){
                        let TBTid = `${id}${i}`;
                        document.getElementById(TBTid).innerHTML = translations[temp][lan];
                    }
                    break;
                case "curtains-contact-emailaddress":
                case "curtains-contact-nickname":
                case "curtains-contact-subject":
                case "curtains-contact-message":
                    element.placeholder = translations[temp][lan];
                    break;
                default:
                    element.innerHTML = translations[temp][lan];
            }
            console.log("%ctranslated element in language %c\""+lan+"\"%c: %c"+temp,"color:orange;","color: orangered","color:orange;","color: lightgray;")
        } catch {
            console.log("could not find element.");
            continue;
        }
    }
}

var flags = ['en', 'de', 'nl', 'fr', 'vk'];
function setFlagBrightness(lan){
    let lanid = 'flag'+lan;
    document.getElementById(lanid).style.filter = 'opacity(100%)'
    console.log('%cbrightness.flag.'+lan+' has been set to '+document.getElementById(lanid).style.filter,"color: lightgreen;")
    for(let temp of flags){
        if(temp == lan) continue;
        let id = 'flag'+temp;
        document.getElementById(id).style.filter = 'opacity(30%)'
        console.log('%cbrightness.flag.'+temp+' has been set to '+document.getElementById(id).style.filter,"color: green;")
    }
}
