//let fox = {
    //name: 'Fox',
    //age: 7,
    //mass: 12,
    //catchPhrase: function(repeats) {
        //let phrase = 'LaunchCode';
        //for (let i = 0; i < repeats; i++) {
            //phrase += ' Rocks';
        //}
        //return phrase;
    //}
//}

//console.log(`${fox.name} is ${fox.age} years old and has a mass of ${fox.mass} kg.`);
//console.log(`${fox.name} says, "${fox.catchPhrase(3)}".`)

class Astronaut {
    constructor(name, age, mass) {
        this.name = name;
        this.age = age;
        this.mass = mass;
    }
}


let hippo = new Astronaut('Hippo', 25, 1500);

console.log(typeof hippo, typeof, fox);
console.log(hippo, fox);

fox.age = 9;
fox.color = 'Red';

console.log(fox);
console.log(fox.age, fox.color);

let tortoise = new Astronaut('Speedy', 120);

console.log(tortoise.name, tortoise.age, tortoise.mass);

//class ClassName {
    //constructor(parameters) {

    //}

    //methodName(parameters) {

    //}
//}

class Astronaut {
    constructor(name, age, mass) {
        this.name = name;
        this.age = age;
        this.mass = mass;
    }
}
let fox = new Astronaut('Fox', 7, 12);

reportStat() {
    let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
}


//let fox = new Astronaut('Fox', 7, 12);
//console.log(fox.reportStats());

class Felidae {
    constructor() {
        this.claws = "retractable";
    }
}

class Panthera extends Felidae {
    constructor() {
        super();
        this.roar = "loud";
    }
}

class Tiger extends Panthera {
    constructor() {
        super();
        this.hasStripes = "true"
    }
}

let tigger = new Tiger();

console.log(tigger);