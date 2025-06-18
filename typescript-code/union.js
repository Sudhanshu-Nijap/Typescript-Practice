"use strict";
let score = 33;
score = 44;
score = "55";
let sudhu;
sudhu = { name: "sudhanshu", id: 24 }; // User
sudhu = { username: "sudhanshu", id: 24 }; // Admin
console.log(sudhu);
// Type Narrowing
function getDbId(id) {
    if (typeof id === "string") {
        console.log("string id:", id.toUpperCase());
    }
    else {
        console.log("numeric id:", id);
    }
}
getDbId(3);
getDbId("sudhu24");
// Array
const data = [1, 2, 3, "5", "6"];
console.log(data);
// strict
let seatAllotment;
seatAllotment = "window";
