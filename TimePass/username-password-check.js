let userEmail = "hey.cnu09@gmail.com";
let password = "1234";

// User entered username in uppercase let just convert all the things in lowercase
userEmail.toLowerCase();

let userCheck = function(myString) {
    if (myString.includes("@") && myString.includes(".")) {
        return `Valid userEmail:`;
    }
    return `Invalid userEmail:`;
};

console.log(userCheck(userEmail));

let passwordCheck = function(myString) {
    if (myString.length > 8) {
        return `Password Strength is Good`;
    }
    return `Week Password`;
};

console.log(passwordCheck(password));