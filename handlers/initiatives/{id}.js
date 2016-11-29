 'use strict';

 var repository = require('../../lib/initiativesRepository');

 module.exports = {
     get: function getInitiative_ById(req, res) {
         res.json(repository.get(req.params['id']));
     }    
 };
