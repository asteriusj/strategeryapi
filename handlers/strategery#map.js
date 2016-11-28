 'use strict';

 var repository = require('../lib/strategery#mapRepository');

 module.exports = {
     get: function getStrategeryMap(req, res) {
         res.json(repository.all())
     }
 };
