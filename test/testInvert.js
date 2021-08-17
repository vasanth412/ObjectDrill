let invert = require("../invert.js");

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
let getInvert = invert(testObject);
console.log(getInvert);