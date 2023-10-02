let superChimpOne = {
   birthName: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
   astronautID: 4
   move: function() {return Math.floor(Math.random*11)}
};

let salamander = {
   birthName: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
   astronautID: 3
   move: function () {return Math.floor(Math.random*11)}
};

let superChimpTwo = {
   birthName: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 7
   move: function () {return Math.floor(Math.random*11)}
};

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

let crew = [superChimpOne, salamander, superChimpTwo]

// Print out the relevant information about each animal.

function crewReports(crew) {
   console.log(`${birthName} is a ${species}. They are ${age} years old and ${mass} kilograms. Their ID is ${astronautID}.`)
}

crewReports(salamander);
// Start an animal race!