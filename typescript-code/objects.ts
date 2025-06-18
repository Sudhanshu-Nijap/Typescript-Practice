// function createUser():{name: string, isActive: boolean}{
//     return {name:"sudhu",isActive: true}
// }

// const user = createUser();
// console.log(createUser());
// console.log(user.name);



// Step 1: created structure using type aliase
type Person = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean
    credentials?: number  // optional
}

// Step 2: input values
let p: Person = {
    _id:"12345",
    name:"sudhu",
    email:"sudhu@gmail.com",
    isActive:true
}

p.email = "manas@gmail.com" // updation
// p._id = "12345"  cant hange becoz "readonly"

// Step 3: Execute
// using variable
console.log(p)

// using function 
function createPerson(user: Person): Person{
    return user; // logic
}
console.log(createPerson(p))

function idName({_id,name}: Person){
    return `${_id} - ${name}`; // logic
}
console.log(idName(p))

// **********************************************

// Structure
type A = { 
    name: string 
};

type B = { 
    age: number 
};

type C = A & B & {
    mobile: number
};

type D = A | B;

// Inputs
const person: C = {
  name: "Sudhu",
  age: 22, 
  mobile: 9920101135 // must have all
};

const person1: D = { 
    name: "Sudhu" // only A
};     
const person2: D = {
    age: 22 // only B
};     

const person3: D = {
    name: "Sudhu",
    age: 22 // A + B is also allowed
}; 

console.log(person1)