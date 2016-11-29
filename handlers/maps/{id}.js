 'use strict';

 var repository = require('../../lib/mapsRepository');

 module.exports = {
     get: function getMap_ById(req, res) {
         res.json(repository.get(req.params['id']));
     }    
 };
