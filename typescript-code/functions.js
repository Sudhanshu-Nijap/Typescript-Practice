"use strict";
function addTwo(num) {
    return num + 2;
    // return "hello";
}
console.log(addTwo(5));
function signUp(name, email, password) {
    return `Signup\nName:${name}\nEmail:${email}\nPassword:${password}`;
}
console.log(signUp("sudhu", "sudhu@gmail.com", 123));
const login = (name, email, password = 154643) => {
    return `Login\nName:${name}\nEmail:${email}\nPassword:${password}`;
};
console.log(login("sudhu", "sudhu@gmail.com"));
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
const fun = (x) => x + 2;
let arr = ["ironman", "spiderman", "thor"];
let ans = arr.map((h) => {
    return `Hero is ${h}`;
});
console.log(ans);
// | Return Type | Meaning                         | Example                       |
// | ----------- | ------------------------------- | ----------------------------- |
// | `void`      | Returns nothing (but exits)     | Just `console.log`, `return;` |
// | `never`     | Never returns (throws or loops) | `throw`, `while(true)`        |
// for displaying errors
function errorMsg(errmsg) {
    console.log(errmsg);
}
// for handling errors
function handleError(errmsg) {
    throw new Error(errmsg);
}
handleError("Heyy");
