'use strict';

var scorecard = require('./scorecard.json');
var jp = require('jsonpath')

module.exports = {
    get: function (id) {
        return jp.query(scorecard, '$..[?(@.id=='+id+')]');
    },
    all: function () {
        return scorecard;
    }
};
