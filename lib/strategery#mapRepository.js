'use strict';

var strategerymap = require('./strategery#map.json');
var jp = require('jsonpath')

module.exports = {
    get: function (id) {
        return jp.query(strategerymap, '$..[?(@.id=='+id+')]');
    },
    all: function () {
        return strategerymap;
    }
};
