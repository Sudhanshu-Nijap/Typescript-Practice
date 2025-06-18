"use strict";
// function createUser():{name: string, isActive: boolean}{
//     return {name:"sudhu",isActive: true}
// }
// Step 2: input values
let p = {
    _id: "12345",
    name: "sudhu",
    email: "sudhu@gmail.com",
    isActive: true
};
p.email = "manas@gmail.com"; // updation
// p._id = "12345"  cant hange becoz "readonly"
// Step 3: Execute
// using variable
console.log(p);
// using function 
function createPerson(user) {
    return user; // logic
}
console.log(createPerson(p));
function idName({ _id, name }) {
    return `${_id} - ${name}`; // logic
}
console.log(idName(p));
// Inputs
const person = {
    name: "Sudhu",
    age: 22,
    mobile: 9920101135 // must have all
};
const person1 = {
    name: "Sudhu" // only A
};
const person2 = {
    age: 22 // only B
};
const person3 = {
    name: "Sudhu",
    age: 22 // A + B is also allowed
};
console.log(person1);
