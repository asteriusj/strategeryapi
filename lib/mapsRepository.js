'use strict';

var maps = require('./maps.json');
var jp = require('jsonpath')

module.exports = {
    get: function (id) {
        return jp.query(maps, '$..[?(@.id=='+id+')]');
    },
    all: function () {
        return maps;
    }
};
