let values = require("../values.js");

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
let getValues = values(testObject);
console.log(getValues);