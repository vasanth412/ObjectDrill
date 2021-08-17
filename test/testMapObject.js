let mapObject = require("../mapObject.js");

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
let getMapObject = mapObject(testObject);
console.log(getMapObject);