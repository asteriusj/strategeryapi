'use strict';

var perspectives = require('./perspectives.json');
var jp = require('jsonpath')

module.exports = {
    get: function (id) {
        return jp.query(perspectives, '$..[?(@.id=='+id+')]');
    },
    all: function () {
        return perspectives;
    }
};
