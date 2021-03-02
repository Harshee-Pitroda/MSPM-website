const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('chooseperson');
})

router.get('/addperson',(req,res)=>{
    res.render('addperson');
})

router.get('/adminlogin',(req,res)=>{
    res.render('adminlogin');
})


module.exports = router;