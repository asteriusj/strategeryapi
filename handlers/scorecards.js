 'use strict';

 var repository = require('../lib/scorecardsRepository.js');

 module.exports = {
     get: function getScorecard(req, res) {
         res.json(repository.all())
     }
 };
