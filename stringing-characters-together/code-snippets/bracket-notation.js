let jsCreator = "Brendan Eich";

console.log(jsCreator[-1]);
console.log(jsCreator[42]);

let firstName = "Grace";
let lastName = "Hopper";

console.log(firstName, "has", firstName.length, "characters");
console.log(lastName, "has", lastName.length, "characters");

let nonprofit = "Launchcode";

console.log(nonprofit.toLowerCase());
console.log(nonprofit);

cityName = "Vienna";
stateName = "Virginia";
location = cityName + "," + stateName;

console.log(location.length);

console.log(nonprofit);
nonprofit[6] = "C";
console.log(nonprofit);

nonprofit = "LaunchCode";

console.log(nonprofit);

let word = 'Javascript';
console.log(word.toUpperCase());
console.log(word.slice(4).toUpperCase());

let language = "JavaScript";
language.replace('J', 'Q');
console.log(language.slice(0,5));

let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();
console.log(trimmed);

console.log(nonprofit.charCodeAt(0));
console.log(nonprofit.charCodeAt(1));
console.log(nonprofit.charCodeAt(2));
console.log(nonprofit.charCodeAt(3));
console.log(nonprofit.charCodeAt(4));
console.log(nonprofit.charCodeAt(5));
console.log(nonprofit.charCodeAt(6));
console.log(nonprofit.charCodeAt(7));
console.log(nonprofit.charCodeAt(8));
console.log(nonprofit.charCodeAt(9));

let codes = [76, 97, 117, 110, 99, 104, 67, 111, 100, 101];
let characters = String.fromCharCode(codes[0]) + String.fromCharCode(codes[1])
                + String.fromCharCode(codes[2]) + String.fromCharCode(codes[3])
                + String.fromCharCode(codes[4]) + String.fromCharCode(codes[5])
                + String.fromCharCode(codes[6]) + String.fromCharCode(codes[7])
                + String.fromCharCode(codes[8]) + String.fromCharCode(codes[9]);

console.log(characters);

console.log('A message\nbroken across lines\n\tand indented');

console.log("The interrobang character, \u203d, combines ? and !");

console.log("\"The dog's favorite toy is a stuffed hedgehog,\" said Chris");

console.log('Launch\nCode')

let user = "Jack";
let currentAge = 9;

console.log("Next year, " + user + " will be " + (currentAge + 1) + ".");

let poem = `The mind chases happiness.
The heart creates happiness.
The soul is happiness
And it spreads happiness
All-where.

-Sri Chinmoy`;

console.log(poem);