const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();

router.post('/addperson',authController.addperson );
router.post('/adminlogin',authController.adminlogin);

module.exports = router;