'use strict';

var strategery_map = require('./strategery_map.json');
var jp = require('jsonpath')

module.exports = {
    get: function (id) {
        return jp.query(strategery_map, '$..[?(@.id=='+id+')]');
    },
    all: function () {
        return strategery_map;
    }
};
