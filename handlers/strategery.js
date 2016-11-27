 'use strict';

 var repository = require('../lib/strategeryRepository');

 module.exports = {
     get: function getStrategeryt(req, res) {
         res.json(repository.all())
     }
 };
