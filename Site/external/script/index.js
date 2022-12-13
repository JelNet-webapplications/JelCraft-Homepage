addEventListener('DOMContentLoaded', (event) => {
    WIPAlert()
});

function WIPAlert() {
    let WIP = document.getElementsByClassName("link-wip");
    for(let i=0;i<WIP.length;i++){
        WIP[i].addEventListener("click", () => {
            alert("This project is still under development! We're working on it, try again in the near future.");
        });
    }
}
