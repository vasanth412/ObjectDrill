let pairs = require("../pairs.js");

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
let getPairs = pairs(testObject);
console.log(getPairs);