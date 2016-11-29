'use strict';

var themes = require('./themes.json');
var jp = require('jsonpath')

module.exports = {
    get: function (id) {
        return jp.query(themes, '$..[?(@.id=='+id+')]');
    },
    all: function () {
        return themes;
    }
};
