'use strict';

var moment = require('moment');

/**
 * Returns a string element with a footer and updateing year
 * @param {string} name
 * @return {string}
 */

exports.footer = function(name) {
    return "©" + moment().format('YYYY') + "  " + name + "  |  " + "All rights reserved";
};