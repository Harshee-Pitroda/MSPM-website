const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { on } = require("nodemon");

const visited = []

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mspm-website'
});

exports.addperson = async (req,res) => {
    console.log(req.body);
    const user_name = req.body.user_name;
    const user_username = req.body.user_username;
    const user_password = req.body.user_password;
    const saltround = 10;

    const hashedp = await bcrypt.hash(user_password,saltround);
    console.log(hashedp);

    db.query('INSERT INTO add_authority SET ? ',  { a_name:user_name,a_username:user_username,a_password:hashedp },(error,results) =>{
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
            res.render('authorityadded')
        }
    })
}

exports.usersignin = async (req,res) => {
    console.log(req.body);
    const cname = req.body.cname;
    const cemail = req.body.cemail;
    const cpass = req.body.cpass;
    const cbranch = req.body.cbranch;
    const saltround = 10;

    const hashedp = await bcrypt.hash(cpass,saltround);
    console.log(hashedp);

    db.query('INSERT INTO add_user SET ? ',  { u_companyname:cname,u_companyemail:cemail,u_companypassword:hashedp ,u_companybranch:cbranch },(error,results) =>{
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
            res.render('companyregistered')
        }
    })
}

exports.adminlogin = async (req,res) => {
    try{
        const { a_username , a_password} = req.body;
        db.query('SELECT * FROM add_authority WHERE a_username = ?',[a_username] , async(error,results)=>{
            console.log(results);
            if(!results || !(await bcrypt.compare(a_password, results[0].a_password) ) ){
                res.status(401).render('adminlogin1')
            } 
            else{
                res.render('chooseadmin')
            }    
        })

    } 
    catch(error){
        console.log(error);
    }
}

exports.adminlogin1 = async (req,res) => {
    try{
        const { a_username , a_password} = req.body;
        db.query('SELECT * FROM add_authority WHERE a_username = ?',[a_username] , async(error,results)=>{
            console.log(results);
            if(!results || !(await bcrypt.compare(a_password, results[0].a_password) ) ){
                res.status(401).render('adminlogin1')
            } 
            else{
                res.render('addperson')
            }    
        })

    } 
    catch(error){
        console.log(error);
    }
}

exports.userlogin = async (req,res) => {
    try{
        const { u_companyname , u_companyemail, u_companypassword} = req.body;
        db.query('SELECT * FROM add_user WHERE u_companyemail = ?',[u_companyemail] , async(error,results)=>{
            console.log(results);
            if(!results || !(await bcrypt.compare(u_companypassword, results[0].u_companypassword) ) ){
                res.status(401).render('userlogin1')
            } 
            else{
                res.render('chooseuser')
            }    
        })

    } 
    catch(error){
        console.log(error);
    }
}

exports.userlogin1 = async (req,res) => {
    try{
        const { u_companyname , u_companyemail, u_companypassword} = req.body;
        db.query('SELECT * FROM add_user WHERE u_companyemail = ?',[u_companyemail] , async(error,results)=>{
            console.log(results);
            if(!results || !(await bcrypt.compare(u_companypassword, results[0].u_companypassword) ) ){
                res.status(401).render('userlogin1')
            } 
            else{
                res.render('chooseuser')
            }    
        })

    } 
    catch(error){
        console.log(error);
    }
}

exports.editinventory = async (req,res) => {
    console.log(req.body);
    // res.send("PRODUCT DETAILS ADDED");
    const p_name = req.body.p_name;
    const p_price = req.body.p_price;
    const p_noproducts = req.body.p_noproducts;
    const p_sidenote = req.body.p_sidenote;

    db.query('INSERT INTO inventorydetails SET ? ',  { p_name:p_name,p_price:p_price,p_noproducts:p_noproducts,p_sidenote:p_sidenote,p_totalprice:(p_noproducts*p_price)},(error,results) =>{
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
            res.render('productadded')
        }
    })
}

exports.updateinventory = (req,res) => {
    console.log(req.body);
    const pu_name = req.body.pu_name;
    const pu_price = req.body.pu_price;
    const pu_noproducts = req.body.pu_noproducts;
    const pu_sidenote = req.body.pu_sidenote;

    var selectquery = "SELECT p_name FROM inventorydetails WHERE p_name = ?";
    var query = db.query(selectquery, [pu_name], function(err, result) {
        if(err){
            console.log(err)
        }
        if(result.length > 0){
            var updatequery = "UPDATE inventorydetails set p_price =? , p_noproducts =?, p_sidenote =?, p_totalprice =?  WHERE p_name = ?";
            var query = db.query(updatequery, [pu_price,pu_noproducts,pu_sidenote,(pu_noproducts*pu_price),pu_name], function(err, result) {
                res.render('productupdated')
                console.log("Record Updated!!");
                console.log(result);
            });
        }
        else{
            res.status(401).render('updateinventory1') 
        }
    });

}

exports.updateinventory1 = (req,res) => {
    console.log(req.body);
    const pu_name = req.body.pu_name;
    const pu_price = req.body.pu_price;
    const pu_noproducts = req.body.pu_noproducts;
    const pu_sidenote = req.body.pu_sidenote;

    var selectquery = "SELECT p_name FROM inventorydetails WHERE p_name = ?";
    var query = db.query(selectquery, [pu_name], function(err, result) {
        if(err){
            console.log(err)
        }
        if(result.length > 0){
            var updatequery = "UPDATE inventorydetails set p_price =? , p_noproducts =?, p_sidenote =?, p_totalprice =?  WHERE p_name = ?";
            var query = db.query(updatequery, [pu_price,pu_noproducts,pu_sidenote,(pu_noproducts*pu_price),pu_name], function(err, result) {
                res.render('productupdated')
                console.log("Record Updated!!");
                console.log(result);
            });
        }
        else{
            res.status(401).render('updateinventory1') 
        }
    });

}


exports.viewinvent = (req,res) => {
    console.log(req.body);
    const search_name = req.body.search_name;
    var selectquery = "SELECT * FROM inventorydetails WHERE p_name= ?";
    var query = db.query(selectquery,[search_name], function (err, rows, fields) {
      if (err) {
        console.log(err);
      }
      else{
        res.render("viewinvent2", {
          items: rows,
        });
      }
      console.log(rows);
    });
}    

exports.viewauthority = (req,res) => {
    console.log(req.body);
    const search_name = req.body.search_name;
    var selectquery = "SELECT * FROM add_authority WHERE a_name= ?";
    var query = db.query(selectquery,[search_name], function (err, rows, fields) {
      if (err) {
        console.log(err);
      }
      else{
        res.render("viewauthority", {
          items: rows,
        });
      }
      console.log(rows);
    });
}    


exports.feedbackform = async (req,res) => {
    console.log(req.body);
    const c_companyname = req.body.name;
    const c_companyemail = req.body.email;
    const c_complaint = req.body.comments;


    db.query('INSERT INTO complaints SET ? ',  { c_companyname:c_companyname, c_companyemail:c_companyemail, c_complaint:c_complaint},(error,results) =>{
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
            res.render('feedbackrecorded')
        }
    })
}

exports.viewcomplaints = (req,res) => {
    console.log(req.body);
    const search_name = req.body.search_name;
    var selectquery = "SELECT * FROM complaints WHERE c_companyname = ?";
    var query = db.query(selectquery,[search_name], function (err, rows, fields) {
      if (err) {
        console.log(err);
      }
      else{
        res.render("viewcomplaints", {
          items: rows,
        });
      }
      console.log(rows);
    });
}    

exports.companydataform = async (req,res) => {
    console.log(req.body);
    // res.send("PRODUCT DETAILS ADDED");
    const companyabv = req.body.abv;
    const companyname = req.body.name;
    const companyadd = req.body.add;
    const companyemail = req.body.email;

    db.query('INSERT INTO companydetails SET ? ',  { companyabv:companyabv,companyname:companyname,companyadd:companyadd,companyemail:companyemail},(error,results) =>{
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
            res.render('companyregistered')
        }
    })
}

exports.makeaquotationpt1 = async (req,res) => {
    console.log(req.body);
    const companyabvq = req.body.companyabvq;

    db.query('INSERT INTO quotationdetails SET ? ', { companyabv:companyabvq},(error,results) =>{
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
            res.render('next1',{companyabvq: req.body.companyabvq});
        }
    })
}

exports.makeaquotationpt2 = async (req,res) => {
    console.log(req.body);
    const prodcheck = (req.body.prodcheck).toString();

    var updatequery = "UPDATE quotationdetails set products =?  WHERE products = 'empty'";
    var query = db.query(updatequery,prodcheck, function(err, result) {
        res.render('next2',{prods: req.body.prodcheck});
        console.log("product inserted!");
        console.log(result);
    })
}

exports.makeaquotationpt3 = async (req,res) => {
    console.log(req.body);
    const qnum = req.body.qnum;
    const valp = req.body.valp;
    const hsn = req.body.hsn;
    const freightc = req.body.freightc;
    const payt = req.body.payt;
    const gst = req.body.gst;
    const payc = req.body.payc;

    var updatequery = "UPDATE quotationdetails set quotationnumber =?, validity =?, HSN =?, packingcharges =? , GST =? , freight =?, paymentterms =?   WHERE companyaddress = 'empty'";
    var query = db.query(updatequery, [qnum,valp,hsn,payc,gst,freightc,payt], function(err, result) {
        if(err){
            console.log(err);
        }
        else{
            res.render('next3');
            console.log("product inserted!");
            console.log(result);
        }
    });
}

exports.quotationtable = async (req,res) => {
    console.log(req.body);
    const addval = (req.body.addval).toString();

    var updatequery = "UPDATE quotationdetails set  companyaddress = ?  WHERE companyaddress = 'empty'";
    var query = db.query(updatequery,addval, function(err, result) {
        if(err){
            console.log(err);
        }
        else{
            res.render('productadded');
            console.log("product inserted!");
            console.log(result);
        }
    });
}