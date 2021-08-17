var _ = require('underscore');

function defaults(obj, defaultProps){
    let getDefaults = _.defaults(obj, defaultProps);
    return getDefaults;
}

module.exports = defaults;