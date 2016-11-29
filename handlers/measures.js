 'use strict';

 var repository = require('../lib/measuresRepository.js');

 module.exports = {
     get: function getMeasure(req, res) {
         res.json(repository.all())
     }
 };
