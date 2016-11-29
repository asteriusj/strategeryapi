 'use strict';

 var repository = require('../lib/perspectivesRepository.js');

 module.exports = {
     get: function getPerspective(req, res) {
         res.json(repository.all())
     }
 };
