'use strict';

var initiatives = require('./initiatives.json');
var jp = require('jsonpath')

module.exports = {
    get: function (id) {
        return jp.query(initiatives, '$..[?(@.id=='+id+')]');
    },
    all: function () {
        return initiatives;
    }
};
