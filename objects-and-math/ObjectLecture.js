let output = [];
let student = {
    names: ["Gerard Darris", "Banana Cat", "Apple Dog", "Mango Zebra", "Kiwi Kiwi"]
    scores: [100, 90, 74, 82, 1]
};

for (let i = 0; i < students["names"].length; i++) {
    let output = "";
    
    for (items in student) {
        output += `${students[items][i]}: `
    }
}

console.log(output.slice(0, -2))

let iteration1 = "Gerard Darris: 100";
let iteration2 = "Banana Cat: 95";


