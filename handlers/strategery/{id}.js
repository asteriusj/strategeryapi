 'use strict';

 var repository = require('../../lib/strategeryRepository');

 module.exports = {
     get: function strategery_getById(req, res) {
         res.json(repository.get(req.params['id']));
     }    
 };
