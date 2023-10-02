let add = function(a, b) {
    return a + b;
};

console.log(add(1, 1));

function printMessage() {
    console.log("The future is now!");
}

setTimeout(printMessage, 5000);

setTimeout(function () {
    console.log("The future is now!");
}, 5000);


let nums = [3.14, 42, 4811];

let timesTwo = function (n) {
    return n*2;
};

let doubled = nums.map(timesTwo);

console.log(nums);
console.log(doubled);

let overTwo = function (n) {
    return n/2;
};

let halved = nums.map(overTwo);

console.log(halved)

