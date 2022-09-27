function loadscript(){
    let paths = ["./script/rickroll.js",
                "./script/theme.js",
                "./script/responsify.js",
                "./script/loadprojects.js",
                "./script/gevuldekoek.js",
                "./script/cookiepref.js",
                "./script/translations/translate.js",
                "./script/translations/jsontranslations.js"];
    for(let temp of paths){
        let elem = document.createElement('script');
        elem.setAttribute('src',temp);
        document.head.appendChild(elem);
    }
    console.log('t zou moet werken')
    dTsC();

}