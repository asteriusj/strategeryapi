 'use strict';

 var repository = require('../lib/tasksRepository.js');

 module.exports = {
     get: function getTask(req, res) {
         res.json(repository.all())
     }
 };
