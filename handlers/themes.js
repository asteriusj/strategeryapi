 'use strict';

 var repository = require('../lib/themesRepository.js');

 module.exports = {
     get: function getTheme(req, res) {
         res.json(repository.all())
     }
 };
