var _ = require('underscore');

function invert(obj){
    let getInvert = _.invert(obj);
    return getInvert;
}

module.exports = invert;