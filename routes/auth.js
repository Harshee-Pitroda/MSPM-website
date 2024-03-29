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

router.post('/searchq',authController.searchq);

router.post('/viewauthority',authController.viewauthority);

router.post('/feedbackform',authController.feedbackform);

router.post('/searchprodname',authController.searchprodname);
router.post('/searchcompanyname',authController.searchcompanyname);

router.post('/viewcomplaints',authController.viewcomplaints);

router.post('/companydataform',authController.companydataform);

router.post('/makeaquotationpt1',authController.makeaquotationpt1);

router.post('/makeaquotationpt2',authController.makeaquotationpt2);


router.post('/makeaquotationpt3',authController.makeaquotationpt3);


router.post('/quotationtable',authController.quotationtable);
module.exports = router;