let arr = ["alpha", "rho", "beta", "omega"];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === "a") {
            console.log(`'${arr[i]}' has an 'a' at index${j}`);
        }
    }
}

let characters = [
    ["Cassian Andor", "Jyn Erso", "K-250"],
    ["Chirrut Imwe", "Baze Malbus"],
    ["Bail Organa", "Princess Leia", "Mon Mothma", "Admiral Raddus"],
    ["Wedge Antilles", "Red Lobster", "Gold Leader"],
];
let leiaFound = false;

for (let i = 0; i < characters.length; i++) {
    for (let j = 0; j < characters[i].length; j++) {
        console.log(`Selecting the group at index ${i}...`)
        if (characters[i][j] === "Princess Leia") {
            console.log("FOUND HER! She has the plans!");
            leiaFound = true;
            break;
        } else {
            console.log(`Nope, that was ${characters[i][j]}`);
        }
    }
    if (leiaFound) {
        break;
    }
}
