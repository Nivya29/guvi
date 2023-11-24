//call by reference

let person ={
    name : "Kenny",
    age : 25
};
let person2 = person;
console.log(person,person2);

person.age = 26;

console.log (person,person2);