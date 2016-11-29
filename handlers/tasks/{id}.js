 'use strict';

 var repository = require('../../lib/tasksRepository');

 module.exports = {
     get: function getTask_ById(req, res) {
         res.json(repository.get(req.params['id']));
     }    
 };
