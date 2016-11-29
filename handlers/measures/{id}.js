 'use strict';

 var repository = require('../../lib/measuresRepository');

 module.exports = {
     get: function getMeasure_ById(req, res) {
         res.json(repository.get(req.params['id']));
     }    
 };
