
const express = require('express');
const router = express.Router();
const paramController = require('../controllers/paramController');

router.post('/params', paramController.getParams);

module.exports = router;
