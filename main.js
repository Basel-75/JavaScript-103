// Check if the string contains a specific word using regex
const myString = 'I love JavaScript';
const regex = /JavaScript/;
const containsRegex = regex.test(myString);
console.log(containsRegex);

// Replace a word in a string using regex
const myRegex = /JavaScript/;
let newString = myString.replace(myRegex, 'Kotlin');
console.log(newString);

// Search for a word in a string using regex
let newRegex = myString.search(/JavaScript/);
console.log(newRegex);

console.log('Start');

// Simulate asynchronous code using Promises
const newUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        const userInfo = {
            name: 'Yousef'
        };
        resolve(userInfo);
    }, 3000);
});
newUser.then(res => {
    console.log('** User info received **', res);
});

console.log('End');

// Destructuring assignment with arrays
let colors = ['red', 'green'];
let [firstColor, secondColor, thirdColor = 'blue'] = colors;
console.log(firstColor, secondColor, thirdColor);

let numbers = [1, 2, [3, 4]];
let [first, second, [third, fourth]] = numbers;
console.log(first, second, third);

// Destructuring assignment with objects
let student = {
    name: 'Osama',
    age: 25
};
let nameVar = 'Sami', ageVar = 22;
({name: nameVar, age: ageVar} = student);
console.log(nameVar, ageVar);

// Rest parameters in functions
function sum(first, second, ...others) {
    console.log(...others);
    return first + second;
}

console.log(sum(1, 2, 6, 80, 75));

// Destructuring assignment with arrays (another example)
let moreColors = ['White', 'Blue', 'Silver'];
let [color] = moreColors;
console.log(color);
