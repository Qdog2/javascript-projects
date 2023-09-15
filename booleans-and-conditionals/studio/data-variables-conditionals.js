// Initialize Variables below
let date = "Date: Monday 2019-03-18";
let time = "Time: 10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;   
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;   
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true
if (preparedForLiftOff = true) {
    console.log("All systems are a go! Initiating space shuttle launch sequence.");
}
console.log(date);
console.log(time);
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount = 7) {
    preparedForLiftOff = true
    console.log("Astronaut Count: 7");
} else { 
    preparedForLiftOff = false;
}
// add logic below to verify all astronauts are ready
if ((astronautCount <= 7) && (crewMassKg = astronautCount * averageAstronautMassKg)) {
    astronautStatus = "ready"
    console.log("Crew Mass: 564.9 kg");
} else {
    astronautStatus = "not ready";
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit) {
    preparedForLiftOff = true
    console.log("Fuel Mass: 76000 kg")
    console.log("Shuttle Mass: 74842.31 kg")
    console.log("Total Mass: 835407.21 kg");
} else {
    preparedForLiftOff = false;
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius < -300 || fuelTempCelsius > -150) {
    preparedForLiftOff = true
    console.log("Fuel Temperature: -225 C");
} else {
    preparedForLiftOff = false;
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel = "100%") {
    preparedForLiftOff = true;
} else {
    preparedForLiftOff = false;
}
// add logic below to verify the weather status is clear
if (weatherStatus = "clear") {
    preparedForLiftOff = true
    console.log("Weather Status: clear");
} else {
    prepapredForLiftOff = false;
}
// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff = true) {
    console.log("Have a safe trip astronauts!");
} else {
console.log("MISSION FAILED! ABORT MISSION!");
}