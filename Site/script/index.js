addEventListener('DOMContentLoaded', (event) => {
    WIPAlert("popup");
});

function WIPAlert(typeOfAlert) {
    let WIP = document.getElementsByClassName("link-wip");
    for(let i=0;i<WIP.length;i++){
        WIP[i].addEventListener("click", () => {
            if(typeOfAlert == "alert"){
                alert("This project is still under development! We're working on it, try again in the near future.");
            } else if(typeOfAlert == "popup"){
                document.getElementById("wippopup").style.left = "-10px";
                setTimeout(() => {
                    document.getElementById("wippopup").style.left = "-410px";
                  }, "5000")
            }
        });
    }
}
