var _ = require('underscore');

function mapObject(obj){

    let getMapObject = _.mapObject(obj,function(val, key) {
  return val + 10});
    return getMapObject;
}

module.exports = mapObject;