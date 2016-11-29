'use strict';

var objectives = require('./objectives.json');
var jp = require('jsonpath')

module.exports = {
    get: function (id) {
        return jp.query(objectives, '$..[?(@.id=='+id+')]');
    },
    all: function () {
        return objectives;
    }
};
