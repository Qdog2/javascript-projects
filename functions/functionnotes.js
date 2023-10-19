function sayHello(name) {
    let msg = `Hello, ${name}!`;
    return msg;
}

function formatEmail(email) {
    return `Email address: ${email}`;
}

console.log(sayHello("Joe"));
console.log(formatEmail("joe@schmo.com"));

function formatSSN(ssn1, ssn2, ssn3) {
    return `${ssn1}-${ssn2}-${ssn3}`;
}

console.log(formatSSN('123', '45', '6789'));

function formatDate(weekday, mm, dd, yyyy) {
    return `${weekday}, ${mm}, ${dd}, ${yyyy}`;
}

let formattedDate = formatDate("Friday", "10", "07", "2022");
console.log(formattedDate);




function addThreeNums (num1, num2, num3) {
    return num1 + num2 + num3;
}

let sumOfThree = addThreeNums(2, 6, 11);
console.log(`The sum is ${sumOfThree}`);

console.log(addThreeNums(5, 10, 42))

console.log(`The sum of 8, 27, and 5 is ${addThreeNums(8, 27, 5)}`);

let allPrepWork = [];
let startedPrepWork = false;

function submitPrepWork(work) {
    allPrepWork.push(work);
    startedPrepWork = true;
    return allPrepWork;
}

submitPrepWork("reading");
console.log(submitPrepWork());
submitPrepWork("exercises");
console.log(submitPrepWork());

function subtotal(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function getTotal(month, arr1, arr2) {
    let div1 = subtotal(arr1);
    let div2 = subtotal(arr2);
    return `In the month ${month}, Division 1 had $${div1} in earnings, while Division 2 had $${div2} in earnings. Total earnings was $${div1 + div2}.`;
}