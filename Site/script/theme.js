let theme = 'light';
function toggleTheme() {
    let img = document.getElementById('themesvg');
    let r = document.querySelector(':root');

    if(theme == 'light') { //Set dark mode
        img.src = './imgs/light-mode.svg';
        theme = 'dark';

        r.style.setProperty('--primary-color', '#53e6d2');
        r.style.setProperty('--secondary-color', '#40b3a3');
        r.style.setProperty('--tetriary-color', ' #42c4b2');
        r.style.setProperty('--background-color', '#060606');
        r.style.setProperty('--foreground-color', '#0d0d0d');
        r.style.setProperty('--shadow-color', '#000000');
        r.style.setProperty('--text-color', '#dfdfdf');
        r.style.setProperty('--header-text-color', 'black');

        document.getElementById('discordWidget').src = 'https://discord.com/widget?id=586500162415755275&theme=dark'
        
    } else { //Set light mode
        img.src = './imgs/dark-mode.svg';
        theme = 'light'
        
        r.style.setProperty('--primary-color', '#53e6d2');
        r.style.setProperty('--secondary-color', '#40b3a3');
        r.style.setProperty('--tetriary-color', ' #42c4b2');
        r.style.setProperty('--background-color', '#f2f2f2');
        r.style.setProperty('--foreground-color', '#f9f9f9');
        r.style.setProperty('--shadow-color', '#dfdcdc');
        r.style.setProperty('--text-color', 'black');
        r.style.setProperty('--header-text-color', 'white');
        
        document.getElementById('discordWidget').src = 'https://discord.com/widget?id=586500162415755275&theme=light'
        
    }
}


function themeOnHover() {
    if(theme == 'dark') {
        let button = document.getElementsByClassName('theme-selection')[0].querySelector('img');
        button.style.filter = 'invert(1)';
    } else {
        button.style.filter = 'invert(0)';
        
    }
}

function themeOffHover() {
    if(theme == 'light') return;
    let button = document.getElementsByClassName('theme-selection')[0].querySelector('img');
    button.style.filter = 'invert(0.6)'
}