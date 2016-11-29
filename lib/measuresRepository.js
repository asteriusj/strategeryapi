'use strict';

var measures = require('./measures.json');
var jp = require('jsonpath')

module.exports = {
    get: function (id) {
        return jp.query(measures, '$..[?(@.id=='+id+')]');
    },
    all: function () {
        return measures;
    }
};
