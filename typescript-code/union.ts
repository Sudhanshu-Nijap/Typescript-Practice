let score: number | string | boolean = 33

score = 44
score ="55"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let sudhu: User | Admin;
sudhu = {name:"sudhanshu", id:24}; // User
sudhu = { username:"sudhanshu", id:24 }; // Admin

console.log(sudhu);

// Type Narrowing
function getDbId(id: number | string) {
    if (typeof id === "string") {
        console.log("string id:", id.toUpperCase());
    } else {
        console.log("numeric id:", id);
    }
}

getDbId(3);         
getDbId("sudhu24");

// Array
const data: (number | string)[] = [1, 2, 3, "5", "6"];
console.log(data)

// strict
let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "window"