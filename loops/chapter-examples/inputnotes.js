const input = require('readline-sync');

let cell = input.question("What cell block are you guys in? ");

while (cell < 2100 || cell > 2200) {
    cell = input.question("Keep searching... ");
}
console.log("You're really close! Now find cell 2187");