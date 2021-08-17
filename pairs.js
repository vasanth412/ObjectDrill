var _ = require('underscore');
function pairs(obj){
    let getPairs = _.pairs(obj);
    return getPairs;
}

module.exports = pairs;
