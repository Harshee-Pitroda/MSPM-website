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