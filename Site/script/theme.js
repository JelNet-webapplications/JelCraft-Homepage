let theme;

window.addEventListener('DOMContentLoaded', (event) => {
    setTheme(getCookie("COOKIEtheme"));
    themeOffHover();
});

function toggleTheme() {

    let array = document.querySelectorAll('*');
    array.forEach(element => {
        element.style.backgroundColor = "";
        element.style.color = "";
    });

    if(theme == 'light') { //Set dark mode
        createCookie("theme", "light")
        console.log("createCookie light")
    } else { //Set light mode
        createCookie("theme", "dark")
        console.log("createCookie dark")
    }
}

function themeOnHover() {
    let button = document.getElementsByClassName('theme-selection')[0].querySelector('img');
    if(theme == 'dark') {
        button.style.filter = 'invert(1)';
    } else {
        button.style.filter = 'invert(0)';
    }
}

function themeOffHover() {
    document.getElementsByClassName('theme-selection')[0].querySelector('img').style.filter = 'invert(0.6)';
}

let testCurse = '';
document.addEventListener('keydown', event => {
    if(event.code == 'KeyZ'){
        console.log("event.code 'KeyZ' has been detected. Shutting off curse mode.")
        setCursify('stop');
        testCurse = '';
    }
    if(event.code == 'KeyC'){
        console.log("event.code 'KeyC' has been detected.");
        testCurse = 'C';
        console.log('user.progress.curse = '+testCurse);
    }
    if(event.code == 'KeyU' && testCurse == 'C') {
        console.log("event.code 'KeyU' has been detected.");
        testCurse = 'CU';
        console.log('user.progress.curse = '+testCurse);
    }
    if(event.code == 'KeyR' && testCurse == 'CU') {
        console.log("event.code 'KeyR' has been detected.");
        testCurse = 'CUR';
        console.log('user.progress.curse = '+testCurse);
    }
    if(event.code == 'KeyS' && testCurse == 'CUR') {
        console.log("event.code 'KeyS' has been detected.");
        testCurse = 'CURS';
        console.log('user.progress.curse = '+testCurse);
    }
    if(event.code == 'KeyE' && testCurse == 'CURS') {
        console.log("event.code 'KeyE' has been detected.");
        console.log('user.progress.curse = '+testCurse);
        sClp = true;
        setCursify('start');
    }
})
function getRandColor(){
    let rand = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    return rand;
}

var sClp = true; // sCwlp = set Cursify loop parameter
function setCursify(par){
    let array = document.querySelectorAll('*');
    if(par == 'stop'){
        sClp = false;
        array.forEach(element => {
            element.style.transition = "all 0.3s ease 0s"
            element.style.backgroundColor = "";
            element.style.color = "";
        });
    }
    if(par == 'start' && sClp){ 
        array.forEach(element => {
            element.style.transition = "all 0s ease 0s"
            element.style.backgroundColor = getRandColor();
            element.style.color = getRandColor();
        });
        setTimeout(() => setCursify('start'), 100);
    }
}

function setTheme(themeMode) {
    console.debug(`setTheme has ben called.\n\tthemeMode: ${themeMode}`)

    if(themeMode != 'dark' && themeMode != 'light') return console.log("setTheme only supports 'light' || 'dark' as input") //? If statement moet toch beter kunnen??
    
    let img = document.getElementById('themesvg');
    let r = document.querySelector(':root');
    let button = document.getElementsByClassName('theme-selection')[0].querySelector('img');

    theme = themeMode
    if(themeMode == 'dark') {
        img.src = './imgs/darkmode-lightmode/light-mode.svg';

        r.style.setProperty('--primary-color', '#53e6d2');
        r.style.setProperty('--secondary-color', '#40b3a3');
        r.style.setProperty('--tetriary-color', ' #42c4b2');
        r.style.setProperty('--background-color', '#171718');
        r.style.setProperty('--foreground-color', '#1e1e21');
        r.style.setProperty('--shadow-color', '#000000');
        r.style.setProperty('--text-color', '#dfdfdf');
        r.style.setProperty('--header-text-color', 'black');

        document.getElementById('discordWidget').src = 'https://discord.com/widget?id=586500162415755275&theme=dark'
        button.style.filter = 'invert(1)';
    } else {
        img.src = './imgs/darkmode-lightmode/dark-mode.svg';

        r.style.setProperty('--primary-color', '#53e6d2');
        r.style.setProperty('--secondary-color', '#40b3a3');
        r.style.setProperty('--tetriary-color', ' #42c4b2');
        r.style.setProperty('--background-color', '#f2f2f2');
        r.style.setProperty('--foreground-color', '#f9f9f9');
        r.style.setProperty('--shadow-color', '#dfdcdc');
        r.style.setProperty('--text-color', 'black');
        r.style.setProperty('--header-text-color', 'white');

        document.getElementById('discordWidget').src = 'https://discord.com/widget?id=586500162415755275&theme=light'
        button.style.filter = 'invert(0)';
    }


}

function setDark() {
    console.log("!!!!! setDark() IS DEPRICATED, UPDATE TO setTheme('dark') !!!!!")
}

function setLight() {
    console.log("!!!!! setLight() IS OUTDATED, UPDATE TO setTheme('light') !!!!!")
}