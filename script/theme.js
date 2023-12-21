let theme;

window.addEventListener('DOMContentLoaded', (event) => {
    theme = 'dark';
    if(!getCookie("COOKIEtheme")) {
        console.warn("No cookies found for theme, defaulting to dark mode & initiating cookies.")
        createCookie("COOKIEtheme", "dark");
        setTheme("dark");
    } else {
        setTheme(getCookie("COOKIEtheme"));
    }
});

function toggleTheme() {
    let array = document.querySelectorAll('*');
    array.forEach(element => {
        element.style.backgroundColor = "";
        element.style.color = "";
    });
    console.log('setCookie '+theme)
    if(theme == "dark"){
        setTheme("light");
        theme = "light";
        setCookie('COOKIEtheme', "light", 14);
    } else {
        setTheme("dark");
        theme = "dark";
        setCookie('COOKIEtheme', "dark", 14);
    }
}

let testCurse = 'void';
function curseProgress(char, progress){
    if(char == 'Z'){
        console.log("event.code 'Key"+char+"' has been detected. Shutting off curse mode.");
    } else {
        console.log("event.code 'Key"+char+"' has been detected");
    }
    console.log('user.progress.curse = '+progress)
    testCurse = progress;
}
document.addEventListener('keydown', event => {
    if(canTypeD) return;
    let pressedKey = event.code;
    switch(pressedKey){
        case 'KeyZ':
            curseProgress('Z', 'void');
            setCursify("stop"); break;
        case 'KeyC':
            if(testCurse != 'void') return;
            curseProgress('C', 'C'); break;
        case 'KeyU':
            if(testCurse != 'C') return;
            curseProgress('U', 'CU'); break;
        case 'KeyR':
            if(testCurse != 'CU') return;
            curseProgress('R', 'CUR'); break;
        case 'KeyS':
            if(testCurse != 'CUR') return;
            curseProgress('S', 'CURS'); break;
        case 'KeyE':
            if(testCurse != 'CURS') return;
            curseProgress('E', 'CURSE'); 
            sClp = true;
            setCursify('start'); break;
        case 'KeyF':
            if(testCurse != 'CURSE') return;
            console.log('KeyF detected; speeding up curse mode.')
            setCursify('start'); break;
    }
})

function getRandColor(){
    let rand = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    return rand;
}

var sClp = true; // sClp = set Cursify loop parameter
function setCursify(par){
    let array = document.querySelectorAll('*');
    if(par == 'stop'){
        sClp = false;
        array.forEach(element => {
            element.style.transition = "all 0.3s ease 0s";
            element.style.backgroundColor = "";
            element.style.color = "";
        });
        document.getElementById('Бnavbar-home').style.transition = 'all 0s ease 0s';
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
    console.debug(`setTheme has been called.\n\tthemeMode: ${themeMode}`)
    if(!["light","dark","white","black"].includes(themeMode)) return console.error("setTheme() only supports\t'light' ||\n\t\t\t\t\t\t\t'dark'  ||\n\t\t\t\t\t\t\t'white' ||\n\t\t\t\t\t\t\t'black' as input") //? If statement moet toch beter kunnen?? jazeker dat moet beter kunnen dus dat heb ik gedaan
    
    let img = document.getElementById('themesvg');
    let r = document.querySelector(':root');

    theme = themeMode
    if(themeMode == 'dark' || themeMode == "black") {
        img.src = './imgs/darkmode-lightmode/light-mode.svg';

        r.style.setProperty('--primary-color', '#53e6d2');
        r.style.setProperty('--secondary-color', '#40b3a3');
        r.style.setProperty('--tetriary-color', ' #42c4b2');
        r.style.setProperty('--background-color', '#171718');
        r.style.setProperty('--foreground-color', '#1e1e21');
        r.style.setProperty('--shadow-color', '#000000');
        r.style.setProperty('--text-color', '#dfdfdf');
        r.style.setProperty('--header-text-color', 'black');
        r.style.setProperty('--fadescreen-opacity', '0.8');
        r.style.setProperty('--button-hover-invert', '1');
        r.style.setProperty('--statustitle-hover','white');
        document.getElementById('discordWidget').src = 'https://discord.com/widget?id=586500162415755275&theme=dark';
        
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
        r.style.setProperty('--fadescreen-opacity', '0.5');
        r.style.setProperty('--button-hover-invert', '0');
        r.style.setProperty('--statustitle-hover','black');

        document.getElementById('discordWidget').src = 'https://discord.com/widget?id=586500162415755275&theme=light';
        
    }
}

function setNavbarButtonColours(){
    let page = document.getElementsByName("page")[0].value;
    document.getElementById("Бnavbar-"+page).classList.add("active");
}