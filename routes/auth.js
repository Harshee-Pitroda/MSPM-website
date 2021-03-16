const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();

router.post('/addperson',authController.addperson );
router.post('/adminlogin',authController.adminlogin);

router.post('/usersignin',authController.usersignin );
router.post('/userlogin',authController.userlogin);

router.post('/editinventory',authController.editinventory);

router.post('/updateinventory',authController.updateinventory);

router.post('/viewinvent',authController.viewinvent);

router.post('/viewauthority',authController.viewauthority);

router.post('/feedbackform',authController.feedbackform);
// router.post('/viewinvent',authController.viewinvent2);
module.exports = router;