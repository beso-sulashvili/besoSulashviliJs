// 1
let number = 100
if (number < 50) {
   console.log("less than 50"); 
} 
else if (number > 20) {
    console.log("more than 20");
}
else {
    console.log("error");
}
let conditionResult = number < 50 ? "less than 50": number > 20 ? "more than 20": "error"

console.log(conditionResult);
// 2
let userName = "mariam"
if (userName === mariam) {
    console.log(true);
}
else {
    console.log(false);
}

let nameResult = userName === mariam ? "true" : false;

console.log(userName);

// 3

let userName1 = "mariam"
switch (userName1) {
    case "mariam":
        console.log(true);
        break
    default:
        console.log(false);
}
