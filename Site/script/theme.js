let theme = 'light';
function toggleTheme() {
    let img = document.getElementById('themesvg');
    
    if(theme == 'light') {        
        img.src = './imgs/light-mode.svg';
        theme = 'dark';
    } else {
        img.src = './imgs/dark-mode.svg';
        theme = 'light'
    }
    console.log('the theme should be : '+theme)
}