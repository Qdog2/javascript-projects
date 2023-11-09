// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    
    let altitude = 0;
    let rocketPosX = 0;
    let rocketPosY = 0;

    //BUTTONS
    const takeoffButton = document.getElementById('takeoff')
    const landButton = document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort')

    //AREAS
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    const rocket = document.getElementById('rocket');
    
    takeoffButton.addEventListener("click", function() {

        let shouldTakeOff = confirm("Confirm that the shuttle is ready for takeoff.");
        console.log(shouldTakeOff);

        if(shouldTakeOff) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = "10000";
        }
    });

    landButton.addEventListener("click", function() {

        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = "0";
        resetRocket();
    });

    abortButton.addEventListener("click", function() {

        let shouldAbort = confirm("Confirm that you want to abort the mission.");
        console.log(shouldAbort);

        if(shouldAbort) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = "0";
            resetRocket();
        }
    });

    //Use event delegation for directional buttons
    document.addEventListener("click", function(event) {
        let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground.getPropertyValue('width')))
        if(event.target.id === "left" && rocketPosX > (bkgWidth / 2 - 40)) {
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if(event.target.id === "right" && rocketPosY < (bkgWidth / 2 - 40)) {
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if(event.target.id === "up" && altitude < 250000) {
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude += 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
        if(event.target.id === "down" && altitude > 0) {
            rocketPosY -= 10
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude -= 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
    })

    function resetRocket() {
        shuttleBackground.style.backgroundColor = "green";
        altitude = 0;
        spaceShuttleHeight.innerHTML = altitude;
        rocketPosX = 0;
        rocketPosY = 0;
        rocket.style.marginLeft = rocketPosX + 'px';
        rocket.style.marginBottm = rocketPosY + 'px';
    }

});