const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index');
})

router.get('/aboutus',(req,res)=>{
    res.render('aboutus');
})

router.get('/meetthedirectors',(req,res)=>{
    res.render('meetthedirectors');
})

router.get('/stats',(req,res)=>{
    res.render('stats');
})

router.get('/loginchoice',(req,res)=>{
    res.render('loginchoice');
})

router.get('/chooseperson',(req,res)=>{
    res.render('chooseperson');
})

router.get('/inventorychoice',(req,res)=>{
    res.render('inventorychoice');
})

router.get('/makeaquotation',(req,res)=>{
    res.render('makeaquotation');
})

router.get('/searchaquotation',(req,res)=>{
    res.render('searchaquotation');
})

router.get('/userlogin',(req,res)=>{
    res.render('userlogin');
})

router.get('/userlogin1',(req,res)=>{
    res.render('userlogin1');
})

router.get('/usersignin',(req,res)=>{
    res.render('usersignin');
})

router.get('/chooseuser',(req,res)=>{
    res.render('chooseuser');
})

router.get('/editinventory',(req,res)=>{
    res.render('editinventory');
})

router.get('/updateinventory',(req,res)=>{
    res.render('updateinventory');
})

router.get('/updateinventory1',(req,res)=>{
    res.render('updateinventory1');
})

router.get('/addperson',(req,res)=>{
    res.render('addperson');
})

router.get('/adminlogin',(req,res)=>{
    res.render('adminlogin');
})

router.get('/adminlogin1',(req,res)=>{
    res.render('adminlogin1');
})

module.exports = router;