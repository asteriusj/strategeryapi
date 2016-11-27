'use strict';

var strategery = require('./strategery.json');
var jp = require('jsonpath')

module.exports = {
    get: function (id) {
        return jp.query(strategery, '$..[?(@.id=='+id+')]');
    },
    all: function () {
        return strategery;
    }
};
