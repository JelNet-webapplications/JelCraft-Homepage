var cmDOM = document.getElementById("contextmenu"), // cm = contextmenu
    entirePage = document.getElementById("html"),
    cmActive = false,
    mouseInCM = false;

document.addEventListener('contextmenu', event => {
    event.preventDefault()
    if(mouseInCM) return;
    cmDOM.style.display = "block";
    cmDOM.style.left = event.clientX + "px";
    cmDOM.style.top = event.clientY + "px";
    cmActive = true;
    entirePage.style.pointerEvents = "none";
    cmDOM.style.pointerEvents = "auto";
});

document.addEventListener("click", event =>{
    if(cmActive && !mouseInCM){
        cmDOM.style.display = "none";
        entirePage.style.pointerEvents = "auto";
    }
});

cmDOM.addEventListener("mouseleave", event =>{
    mouseInCM = false;
});

cmDOM.addEventListener("mouseenter", event =>{
    mouseInCM = true;
});

cmDOM.onclick = e => {
    alert("no function has been found for \"" + e.target.innerHTML + "\".");
};