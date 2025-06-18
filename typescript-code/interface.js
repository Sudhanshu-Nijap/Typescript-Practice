"use strict";
// Object that conforms to IAdmin
let Sudhu = {
    dbId: 123,
    email: "sudhu@gmail.com",
    userId: 12345,
    startTrial: () => {
        return "Trial Started";
    },
    getCoupon: (couponName, off) => {
        return 102;
    },
    githubToken: "github",
    role: "Role",
};
// Changing a non-readonly property
Sudhu.email = "manas@gmail.com";
// Output the object
console.log(Sudhu);
// Function
function AdminInterface(a) {
    return {
        dbId: 123,
        email: "sudhu@gmail.com",
        userId: 12345,
        startTrial: () => {
            return "Trial Started";
        },
        getCoupon: (couponName, off) => {
            return 102;
        },
        githubToken: "github",
        role: "Role",
    };
    // return a;
}
console.log(AdminInterface());
