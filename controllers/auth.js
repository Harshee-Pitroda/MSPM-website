const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { on } = require("nodemon");



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
                res.send("UPDATED INVENTORY");
                console.log("Record Updated!!");
                console.log(result);
            });
        }
        else{
            res.status(401).render('updateinventory1') 
        }
    });

}

exports.deleteinventory = (req,res) => {
    console.log(req.body);
    const pu_name = req.body.pu_name;

    var selectquery = "SELECT p_name FROM inventorydetails WHERE p_name = ?";
    var query = db.query(selectquery, [pu_name], function(err, result) {
        if(err){
            console.log(err)
        }
        if(result.length > 0){
            var deletequery = "DELETE FROM inventorydetails WHERE p_name = ?";
            var query = db.query(deletequery,[pu_name],function(err, result) {
                res.send("PRODUCT DELETED");
                console.log("PRODUCT DELETED!!");
                console.log(result);
            });
        }
        else{
            res.status(401).render('updateinventory1') 
        }
    });

}
// exports.viewinventory = (req,res) => {
    
//     return new Promise(function(resolve,reject){
//         var selectquery = "SELECT * FROM inventorydetails";
//         var query = db.query(selectquery, function(error, rows){
//             if(error){
//                 reject(error);
//                 console.log(error);
//             }
//             else{
//                 resolve(rows);
//                 console.log(rows);
//             }

//         })
//     })


// }

// exports.viewinventory = (req,res) => {
    
//         var selectquery = "SELECT * FROM inventorydetails";
//         var query = db.query(selectquery, function(error, rows){
//             res.json(rows);
//             console.log(rows);
//         })


// }


// exports.viewinventory = (req,res) => {
//     var selectquery = "SELECT p_name FROM inventorydetails WHERE p_name = ?";
//     var query = db.query(selectquery,function(err,rows,fields){
//         if(err) throw err
//         res.render('viewinventory',{
//             title: 'Inventory detials',
//             items: rows
//         })
//     })
// }