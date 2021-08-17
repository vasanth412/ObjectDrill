var _ = require('underscore');
const obj = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
mapObject(obj);
function mapObject(obj){

    let getMapObject = _.mapObject(obj,function(val, key) {
  return val + 5});
    return getMapObject;
}

module.exports = mapObject;