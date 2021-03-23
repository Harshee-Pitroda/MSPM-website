const express = require("express");
const path = require("path");
const mysql = require("mysql");
const dotenv = require("dotenv");
var session  = require('express-session');
var flash = require('connect-flash');
var engines = require('consolidate');
var exphbs  = require('express-handlebars');

dotenv.config({ path: './.env'});

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mspm-website'
});

const visited = []

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// app.engine('handlebars', engines.handlebars);
// app.engine('pug', engines.pug);

// app.set('view engine', 'pug');
// app.set('views','./views');


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
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false , maxAge: 60000 }
  }))
  
  app.use(flash());


app.listen(5001,()=>{
    console.log("SERVER STARTED ON PORT 5001");
} )
