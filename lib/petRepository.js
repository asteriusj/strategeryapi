'use strict';

var pet = require('./pet.json');
var jp = require('jsonpath')

module.exports = {
    get: function (id) {
        return jp.query(pet, '$..[?(@.id=='+id+')]');
    },
    all: function () {
        return pet;
    }
};
