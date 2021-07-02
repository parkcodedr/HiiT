
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

//lesson two
data = { "fname": "jhon" }
const newdata = data;
newdata.fname = "jonah"
console.log(data);
console.log(newdata);

const score = 90;
let newScore = score;
newScore = 95
console.log(score);
console.log(newScore);

const gretting = "hello mr john , you are welcome to HIIT";
const words = gretting.split(",");
console.log(gretting)
console.log(words);
const subgreeting = gretting.slice(1, 5);
console.log(subgreeting);
console.log(gretting.length);
const pos = gretting.indexOf("john");
console.log(pos);
const isInWord = gretting.includes("hello");
console.log(isInWord);

const upperleter = gretting.toUpperCase();
console.log(upperleter);

const smallWord = gretting.substring(0, 9);
console.log(smallWord)
const smallWordsub = gretting.substring(0, 4);
console.log(smallWordsub)
console.log(gretting.replace("john", "wyldpych"));

//functions
function sayHi() {
    return (90 + 20);
    // console.log("hi function");
}
const d = sayHi();
console.log(d);


function login(username, password) {
    let access;
    if (username == "admin" && password == "admin") {
        access = true;
    } else {
        access = false;
    }
    return access;
}
console.log(login("admin", "admin"));

function square(num) {
    return num * num;
}
function printhi() {
    console.log("hi")
}
console.log(square(10));

const getElement = (data) => {
    return data[0];
}
console.log(getElement(["php", "python", "javascript", "java"]));



