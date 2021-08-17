let defaults = require("../defaults.js");

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
let defaultProps = {};
let getDefaults = defaults(testObject, defaultProps);
console.log(getDefaults);