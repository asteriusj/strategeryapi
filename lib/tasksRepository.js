'use strict';

var tasks = require('./tasks.json');
var jp = require('jsonpath')

module.exports = {
    get: function (id) {
        return jp.query(tasks, '$..[?(@.id=='+id+')]');
    },
    all: function () {
        return tasks;
    }
};
