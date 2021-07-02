
let age;
let s = 20;
age = 45;

const pi = 3.142;

s -= 25;
s = s + 25;
document.write(age, " ", s);
console.log(pi);
console.log(10 % 2);

console.log(10 ** 2);
console.log(age++);


//let firstName = "John";//string
//console.log(typeof firstName);

let age2 = 20;//number
console.log(typeof age2);

let isLoginIn = false;
console.log(typeof isLoginIn);

const people = { firstName: "Mike", lastName: "Emma" };
const fullName = people.firstName + " " + people.lastName;
//destructuring
const { firstName, lastName } = people;

console.log(people.lastName);

console.log(firstName);

//console.log(fullName);


const favorite = ["orange", "apple", "mango"];
const movie = Array("Lord 10", "Mongoose");

console.log(favorite[0]);
const status = undefined;
console.log(lastName);
const num = 2.02;
const bi = "5";
console.log(bi + 5);
console.log(Number(bi) + 5);


const getElement = (data) => {
    return data[0];
}

console.log(getElement(["php", "python", "javascript", "java"]));



