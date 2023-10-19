//Import hello.js into index.js
//const hello = require('./hello.js');
//one level up
//const hello = require('../hello.js');
//one level down
//const hello = require('./Projects/myCoolApp.js);

function isPanlindrome(str) {
    return str === str.split('').reverse().join('');
}

function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

function randomArrayElement(arr) {
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
}

