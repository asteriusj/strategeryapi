 'use strict';

 var repository = require('../../lib/strategery#mapRepository');

 module.exports = {
     get: function getStrategeryMapById(req, res) {
         res.json(repository.get(req.params['id']));
     }    
 };
