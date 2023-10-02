

let tortoiseTwo = {
    species: "Galapagos Tortoise",
    name: "Patricia",
    weight: 800,
    age: 85,
    diet: ["pumpkins", "lettuce", "cabbage"],
    sign: function() {
       return this.name + " is a " + this.species;
    }
  };

  let giraffe = {
    species: "Reticulated Giraffe",
    name: "Cynthia",
    weight: 1500,
    age: 15,
    diet: "leaves"
  };

  for (item in giraffe) {
     console.log(item + ", " + giraffe[item]);
  }

  console.log(Math.PI);
  console.log(Math.Pie*4);
  console.log(Math.PI + Math.PI);

  function randomSelection(arr){
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
 }

 let happiness = ['Hope','Joy','Peace','Love','Kindness','Puppies','Kittens','Tortoise'];

 for (i=0; i < 8; i++){
    console.log(randomSelection(happiness));
 }