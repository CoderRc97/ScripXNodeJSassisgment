const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
console.log("Router Loaded");

router.get('/:genre',homeController.GetGenre);

module.exports = router;