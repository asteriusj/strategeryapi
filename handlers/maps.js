 'use strict';

 var repository = require('../lib/mapsRepository.js');

 module.exports = {
     get: function getMap(req, res) {
         res.json(repository.all())
     }
 };
