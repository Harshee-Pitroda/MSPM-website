const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');



const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mspm-website'
});

exports.addperson = async (req,res) => {
    console.log(req.body);
    res.send("AUTHORITY ADDED");
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
        }
    })
}

exports.usersignin = async (req,res) => {
    console.log(req.body);
    res.send("COMPANY ADDED");
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