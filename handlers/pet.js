 'use strict';

 var repository = require('../lib/petRepository');

 module.exports = {
     get: function getPet(req, res) {
         res.json(repository.all())
     }
 };
