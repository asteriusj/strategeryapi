 'use strict';

 var repository = require('../../lib/strategeryRepository');

 module.exports = {
     get: function getStrategeryById(req, res) {
         res.json(repository.get(req.params['id']));
     }    
 };
