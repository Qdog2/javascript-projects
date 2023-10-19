for (let i = 1; i < 3; i++) {
    
    console.log(i);
}

for (let i = 0; i < 11; i++) {
    console.log(i);
}

for (let i = 0; i < 6; i++) {
    console.log(i + 5);
}

let color = "black";

for (let i = 0; i < color.length; i++) {
    console.log(color[i]);
}

let obiGreeting = "Hello there";

for (let i = 0; i < obiGreeting.length; i++) {
    console.log(obiGreeting[i]);
}

let arr = [12, "hi", true];
for (let i = arr.length-1; i >= 0; i--) {
    console.log(arr[i]);
}

let ackbarQuote = ["trap!", "a", "It's"];

for (let i = ackbarQuote.length-1; i>=0; i--) {
    console.log(ackbarQuote[i]);
}

let letters = "e2H8zE3WL79LYUO4p"
for (let i = 2; i < letters.length; i += 3) {
    console.log(letters[i]);
}

let quote = ["I'd", "I", "just", "have", "as", "a", "soon", "bad", "kiss", "feeling", "a", "about", "wookie", "this"];

for (let i = 1; i < quote.length; i += 2) {
    console.log(quote[i]);
}

let nums = [15, 37, 102, 95, 48];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 5 === 0) {
        console.log(nums[i]);
    }
}

let endorForest = "eowkewokeowekwokewokeowkeowekowewokokoeowkeowkewokowk";

for (let i = 0; i < endorForest.length; i++) {
    if (endorForest.slice(i, i+4) === "ewok") {
        console.log(`I found an ewok at index ${i}!`);
    }
} 

let numbers = [5, 2, 9];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
}
console.log(sum);

let moons = ["moon", "moon", "Death Star", "moon"];
let numMoons = 0;
for (let i = 0; i < moons.length; i++) {
    if (moons[i] === "moon") {
        numMoons++;
    } else {
        console.log("That's no moon!");
    }
}
console.log(`There are a total of ${numMoons} moons.`);

let text = "1Le2tt34er5s6on71y8!";
let correctText = "";
for (let i = 0; i < text.length; i++) {
    if (isNaN(Number(text[i]) || text[i] === " ")){
        correctText += text[i];
    }
}
console.log(correctText);

let threePews = "";
for (i = 1; i <= 3; i++) {
    threePews += "pew"
    console.log(threePews);
}

let words = ["July", "August", "September"];
let longerThan5 = [];
for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
        longerThan5.push(words[i]);
    }
}

console.log(longerThan5);

let birthNames = ["Aldaraan", "Calrissian", "Andor", "Greedo", "Ackbar", "Sateen", "Amadala"];
let onlyANames = [];
for (let i = 0; i < birthNames.length; i++) {
    if (birthNames[i][0] === "A") {
        onlyANames.push(birthNames[i]);
    }
}

console.log(onlyANames);

let k = 3;

while (k < 6) {
    console.log(i);
    k++;
}

let numbs =[3, 2, 67, 8, 11, 4];
let j = 0;
let hasBigNum = false;

while (!hasBigNum && j < nums.length) {
    if (numbs[j] > 50) {
        hasBigNum = true;
    }
    j++;
}

let totalDistance = 12;
let currentDistance = 6;
while (currentDistance < totalDistance) {
    console.log(`Still speeding dangerously close to the black hole cluster! ${totalDistance - currentDistance} parsecs to go...`)
    currentDistance++;
}
console.log("We did it!");

let bounties = ["smuggler", "thief", "child", "thief", "smuggler", "murderer", "thief"];
let b = 0;
let hasFoundTheChild = false;

const input = require('readline-sync');
let num = Number(input.question("Please enter a number from 1-9. ")); 

while (num < 1 || num > 9 || isNaN(num)) {
    num = Nvumber(input.question("Number must be greater than 0 and less than 10. "));
}

const input = require('readline-sync')
let ans = input.question ("Ready to begin? YES or NO ");
    ans = ans.toUpperCase();
while (ans !=== "YES" && ans!=== "NO") {
    ans = input.question("Invalid input. YES or NO? ");
}