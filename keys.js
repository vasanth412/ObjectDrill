const { keys } = require('underscore');
var _ = require('underscore');

function Keys(obj){
let getKeys = _.keys(obj);
    return getKeys;
}

module.exports = keys;