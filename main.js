
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


let firstName = "John";//string
console.log(typeof firstName);

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

lesson two
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
//console.log(getElement(["php", "python", "javascript", "java"]));

//lesson three
const greetMe = () => console.log("hi");
greetMe();

function greetThem() {
    console.log('hi them');
}
greetThem();


const area = (height, width) => {
    return height * width;
}
console.log(area(12, 14));

const perimeter = r => r * 2 * 3.142;
console.log(perimeter(6));

const employees = ["john", "mike", "peter", "raymond"];
console.log(employees);

const users = [
    { username: "peter1000", level: "novice", rank: "senior" },
    { username: "okwori32", level: "master", rank: "boss" },
    { username: "abu290", level: "master", rank: "senior" },
];

console.log(users.length);
employees.push("loveth");
console.log(employees);

console.log(employees.indexOf("loveth"));
employees.shift();
console.log(employees);
const seniorUsers = users.filter(user => user.rank == "senior");
console.log(seniorUsers);

const scores = [56, 45, 34, 65, 90];
const highScore = scores.find(score => score > 60);
console.log(highScore);
console.log(scores);
scores.pop()
console.log(scores);

const newUser = users.map((user) => {
    user.color = "red";
    return user;
})

console.log(newUser);
const userData = [
    { name: "joe" },
    { name: "joy" },
]
if (userData.length > 0) {
    userData.map((user) => {
        console.log(user.name);
    })
}
console.log(employees.sort());

setTimeout(() => {
    console.log("yes after 7 seconds");
}, 7000);


console.log("hey dont wait for timeout");
const phoneSize = [100, 20, 300, 90, 9, 45, 4];
console.log(phoneSize.sort(function (a, b) {
    return a - b;
}));

const stSize = phoneSize.toString();
console.log(stSize);

const st1Size = phoneSize.join("-");
console.log(st1Size);

lesson four

const officer = {
    fname: "philip",
    lname: "Mike", staffId: "0092", grade: "7/11", salary: 90000,
    spouse: { fname: "Meg", lname: "Mike", age: 28 },
    post: [
        { id: 1, title: "javascript objects", comment: 45 },
        { id: 2, title: "json objects", comment: 21 },
    ],
    printName: function () {
        console.log(this.fname);
    }
};

officer.spouse.color = "green";

console.log(officer.spouse);
console.log(officer.post[0].title);
officer.printName();


Object.keys(officer).forEach(key => {
    console.log(officer[key]);
});

console.log(Object.keys(officer));

console.log(Object.values(officer));

console.log(Object.entries(officer));

const pet = { petName: "dog", petColor: "red" }
const bull = { bullName: "lolly", size: "16cm" }

const animals = Object.assign(pet, bull);
console.log(animals);



const song = document.getElementById("song");
const btnSong = document.getElementById("btnSong");

const lightOn = document.getElementById("lightOn");
const lightoff = document.getElementById("lightOff");
const bulb = document.getElementById("bulb");


lightOn.addEventListener("click", () => {
    bulb.src = "images/pic_bulbon.gif"
})

lightoff.addEventListener("click", () => {
    bulb.src = "images/pic_bulboff.gif"
})
btnSong.addEventListener("click", () => {
    song.textContent = "Aye Mama Osita Osadebe";
})







