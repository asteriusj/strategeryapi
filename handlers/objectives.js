 'use strict';

 var repository = require('../lib/objectivesRepository.js');

 module.exports = {
     get: function getObjective(req, res) {
         res.json(repository.all())
     }
 };
