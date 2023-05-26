const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
console.log("Router Loaded");

router.get('/',homeController.home);
router.use('/genre',require('./genre'));
router.use('/language',require('./language'));

module.exports = router;