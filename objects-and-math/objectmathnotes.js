

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

 for (let i = 0; i < 100; i++) {
    console.log(Math.random());
 }


 function rolld20() {
    return Math.ceil(Math.random()*20)
 }

 for (let i = 0; i < 20; i++) {
    console.log(rolld20())
 }

for (let i = 0; i < 10: i++) {
    console.log(Math.round((Math.random()*1000))/10)
}
 Math.ceil(Math.random()*100);