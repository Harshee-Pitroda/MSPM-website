const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();

router.post('/addperson',authController.addperson );
router.post('/adminlogin',authController.adminlogin);

router.post('/usersignin',authController.usersignin );
router.post('/userlogin',authController.userlogin);

router.post('/editinventory',authController.editinventory);

router.post('/updateinventory',authController.updateinventory);

router.post('/deleteinventory',authController.deleteinventory);
module.exports = router;