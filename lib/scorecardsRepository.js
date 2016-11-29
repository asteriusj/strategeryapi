'use strict';

var scorecards = require('./scorecards.json');
var jp = require('jsonpath')

module.exports = {
    get: function (id) {
        return jp.query(scorecards, '$..[?(@.id=='+id+')]');
    },
    all: function () {
        return scorecards;
    }
};
