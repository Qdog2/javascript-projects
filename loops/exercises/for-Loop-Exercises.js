/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

for(let i = 0; i < 21; i++) {
  console.log(i);
} 

for (let i = 3; i <= 29; i+=2) {
  console.log(i);
}

for (let i = 12; i >= -14; i-=2) {
  console.log(i)
}
/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

school = "LaunchCode";
let reversed = "";

for (let i = 0; i < school.length; i++) {
  reversed = school[i] + reversed;
}

console.log(reversed);

lecture = [1, 5, 'LC101', 'blue', 421];

for (let i = 0; i < lecture.length; i++) {
  console.log(lecture[i])
}

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

  let otherArr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  let evens = [], odds = [];

  for (let i = 0; i < otherArr.length; i++) {
    if (otherArr[i] % 2 === 0)
    evens.push(otherArr[i])
    console.log(evens);
  }

  for (let i = 0; i < otherArr.length; i++) {
    if (otherArr[i] % 2 !==  0)
    odds.push(otherArr[i])
    console.log(odds);
  }

  const input = require('readline-sync');
  let fuelLevel = 0
  let numAstronauts = 0
  let altitude = 0

  while (fuelLevel <= 5000 || fuelLevel > 30000 || isNaN(fuelLevel)) {
    fuelLevel = input.question("Enter the starting fuel level: ");
  }
     while (numAstronauts > 7 || numAstronauts < 1) {
      numAstronauts = input.question("Enter the number of astronauts: ")
     }
        while (fuelLevel-100*numAstronauts >= 0) {
          altitude += 50;
          fuelLevel -= 100*numAstronauts;
          let output = `The shuttle gained an altitude of ${altitude} km.`;
          console.log(output);
          if (altitude >= 2000) {
            output+= " Orbit achieved!";
            console.log(output);
          } else (
            console.log("Orbit failed. Try again.")
          )
        }
     


  