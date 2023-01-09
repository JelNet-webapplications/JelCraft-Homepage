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

/*  
    ----------------
    wip popup dinges
    ----------------
*/

let showorhide = "show";
function showWIPdetails(){
    let wips = document.getElementsByClassName("projectstatus");
    if(showorhide == "show"){
        for(let i = 0; i < wips.length; i++){
            wips[i].style.fontSize = "16px";
            wips[i].style.width = "150px";
            wips[i].style.left = "calc(100% - 20px * 0.5 - 120px)";
            wips[i].style.top = "15px";
            wips[i].style.height = "30px";
        };
        showorhide = "hide";
    } else {
        for(let i = 0; i < wips.length; i++){
            wips[i].style = null;
        }
        showorhide = "show";
    }
}