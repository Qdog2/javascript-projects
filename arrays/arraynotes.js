let sports = ["football", "basketball", "golf", "hockey"];

sports.includes("golf");
sports.includes("soccer");

let roy = ["red", "orange", "yellow"];
let g = ["green"];
let biv = ["blue", "indigo", "violet"];
let rainbow = roy.concat(g, biv);
console.log(rainbow);

let hodgepodge = [0, 1, 2, 3, "a", "b", true, false];
let numbers = hodgepodge.slice(0, 4);
let letters = hodgepodge.slice(4, 6);
let booleans = hodgepodge.slice(6);

let catchphrase = "How would you like to do this?";
let phraseArr = catchphrase.split(" ");

let mixedData = ["clock", 34, false, 0, "trombone"];
let doubledDashed = mixedData.join("--");
let jennyDigits = [8, 67, "-", 53, 0, 9].join('');

let activities = ["basketball", "football", "hockey", "golf"];
console.log(activities.reverse());

let characters = "cAed";
let sortedCaps = characters.toUpperCase().split('').sort();
let allFiveJoined = sortedCaps.splice(1, 0, "B").join('');
console.log(sortedCaps);
console.log(allFiveJoined);

let diagonAlley = "Diagon Alley";
diagonAlley = diagonAlley.toLowerCase().replace(" ", "").replace("e", "");
console.log(diagonAlley);

let first3 = ["a", "b", "c"];
let last3 = ["x", "y", "c"];
let data = [first3, last3];

console.log(data);