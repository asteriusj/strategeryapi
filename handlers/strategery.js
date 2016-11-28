 'use strict';

 var repository = require('../lib/strategeryRepository');

 module.exports = {
     get: function getStrategery(req, res) {
         res.json(repository.all())
     }
 };
