 'use strict';

 var repository = require('../lib/initiativesRepository.js');

 module.exports = {
     get: function getInitiative(req, res) {
         res.json(repository.all())
     }
 };
