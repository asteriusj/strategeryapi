 'use strict';

 var repository = require('../../lib/strategery_mapRepository');

 module.exports = {
     get: function StrategeryMap_getById(req, res) {
         res.json(repository.get(req.params['id']));
     }    
 };
