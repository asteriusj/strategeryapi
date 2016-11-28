 'use strict';

 var repository = require('../lib/strategery_mapRepository');

 module.exports = {
     get: function StrategeryMap_get(req, res) {
         res.json(repository.all())
     }
 };
