function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");
    // Put your code for the exercises here.
    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
    });
    
    missionAbort.addEventListener('click', event=> {
        let response = window.confirm("Are you sure you want to abort the mission?")
        if (response === true) {
            window.alert("Mission aborted! Space shuttle returning home")
        }
    })
}
 
function changeBackground() {
    var text = document.getElementById("abortMission").style.backgroundColor = "red";
}

function backToNormal() {
    var text = document.getElementById("abortMission").style.backgroundColor = "";
}
window.addEventListener("load", init);
