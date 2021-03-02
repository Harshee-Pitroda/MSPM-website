const express = require("express");
const path = require("path");
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({ path: './.env'});

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mspm-website'
});

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.set('view engine', 'hbs');

app.set('view engine','hbs');

db.connect((error) => {
    if(error){
        console.log(error)
    }
    else{
        console.log("MY SQL CONNECTED!")
    }
})

app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

app.listen(5001,()=>{
    console.log("SERVER STARTED ON PORT 5001");
} )