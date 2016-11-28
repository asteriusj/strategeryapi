 'use strict';

 var repository = require('../lib/strategeryRepository');

 module.exports = {
     get: function strategery_get(req, res) {
         res.json(repository.all())
     }
 };
