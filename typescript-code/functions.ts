function addTwo(num: number): number{
    return num+2;
    // return "hello";
}
console.log(addTwo(5))

function signUp(name: string,email: string,password: number): string{
    return `Signup\nName:${name}\nEmail:${email}\nPassword:${password}`
} 

console.log(signUp("sudhu","sudhu@gmail.com",123))

const login = (name: string,email: string,password: number = 154643): string => {
     return `Login\nName:${name}\nEmail:${email}\nPassword:${password}`
}
console.log(login("sudhu","sudhu@gmail.com"))

function getValue(myVal: number): boolean | string{
    if (myVal > 5){
        return true
    }
    return "200 OK"
}

const fun = (x:number):number => x+2;

let arr = ["ironman","spiderman","thor"]

let ans = arr.map((h): string => {
    return `Hero is ${h}`
}) 

console.log(ans)


// | Return Type | Meaning                         | Example                       |
// | ----------- | ------------------------------- | ----------------------------- |
// | `void`      | Returns nothing (but exits)     | Just `console.log`, `return;` |
// | `never`     | Never returns (throws or loops) | `throw`, `while(true)`        |


// for displaying errors
function errorMsg(errmsg: string): void{
    console.log(errmsg)
}

// for handling errors
function handleError(errmsg: string): never{
    throw new Error(errmsg)
}

handleError("Heyy");