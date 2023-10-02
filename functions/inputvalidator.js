const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    let userInput = input.question(prompt);

    while(!isValid(userInput)) {
    console.log("Invalid input. Try again.");
    userInput = input.question(prompt);
    }

    return userInput;
}

let isValidPassword = function(password) {
    if (password.length < 8) {
    return false;
    }

    return true;
};

console.log(getValidInput('Create a passowrd:', isValidPassword));


