const input = require('readline-sync');
let str = "LaunchCode";

let answer = input.question("How many letters would you like to move? ");
//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newString = str.slice(answer)+str.slice(0,answer);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The modified version of ${str} is ${newString}.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (numLetters <= 3) {
    console.log(`We have moved the letters successfully!`);
} else {
    console.log(`You wanted ${answer} to be moved, but ${str} only contains ${str.length} and cannot move more letters than that.`);
}