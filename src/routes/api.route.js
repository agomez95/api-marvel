'use strict';

const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api.controller');

router
    .get('/', apiController.getHeroesController)

module.exports = router;