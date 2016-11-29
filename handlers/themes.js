 'use strict';

 var repository = require('../lib/themessRepository.js');

 module.exports = {
     get: function getTheme(req, res) {
         res.json(repository.all())
     }
 };
