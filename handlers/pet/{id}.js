 'use strict';

 var repository = require('../../lib/petRepository');

 module.exports = {
     get: function getPetById(req, res) {
         res.json(repository.get(req.params['id']));
     }    
 };
