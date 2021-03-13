const express = require("express");
const mysql = require("mysql");
const router = express.Router();
var userModel = require("../controllers/auth");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mspm-website",
});

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/aboutus", (req, res) => {
  res.render("aboutus");
});

router.get("/meetthedirectors", (req, res) => {
  res.render("meetthedirectors");
});

router.get("/stats", (req, res) => {
  res.render("stats");
});

router.get("/loginchoice", (req, res) => {
  res.render("loginchoice");
});

router.get("/chooseperson", (req, res) => {
  res.render("chooseperson");
});

router.get("/inventorychoice", (req, res) => {
  res.render("inventorychoice");
});

router.get("/makeaquotation", (req, res) => {
  res.render("makeaquotation");
});

router.get("/searchaquotation", (req, res) => {
  res.render("searchaquotation");
});

router.get("/userlogin", (req, res) => {
  res.render("userlogin");
});

router.get("/userlogin1", (req, res) => {
  res.render("userlogin1");
});

router.get("/usersignin", (req, res) => {
  res.render("usersignin");
});

router.get("/chooseuser", (req, res) => {
  res.render("chooseuser");
});

router.get("/editinventory", (req, res) => {
  res.render("editinventory");
});

router.get("/updateinventory", (req, res) => {
  res.render("updateinventory");
});

router.get("/updateinventory1", (req, res) => {
  res.render("updateinventory1");
});

router.get("/addperson", (req, res) => {
  res.render("addperson");
});

router.get("/viewinvent2", (req, res) => {
  res.render("viewinvent2");
});

router.get("/searchinvent", (req, res) => {
  res.render("searchinvent");
});

router.get("/adminlogin", (req, res) => {
  res.render("adminlogin");
});

router.get("/adminlogin1", (req, res) => {
  res.render("adminlogin1");
});

router.get("/deleteinventory", (req, res) => {
  res.render("deleteinventory");
});

router.get("/productadded", (req, res) => {
  res.render("productadded");
});

router.get("/productupdated", (req, res) => {
  res.render("productupdated");
});

router.get("/productadded", (req, res) => {
  res.render("productadded");
});

router.get("/authorityadded", (req, res) => {
  res.render("authorityadded");
});

router.get("/companyregistered", (req, res) => {
  res.render("companyregistered");
});

router.get("/viewinvent", (req, res) => {
  var selectquery = "SELECT * FROM inventorydetails";
  var query = db.query(selectquery, function (err, rows, fields) {
    if (err) throw err;
    res.render("viewinvent", {
      items: rows,
    });
  });
});


router.get("/add1/:p_name", (req, res, next) => {
  let pname = req.params.p_name;
  let p_noproducts = parseFloat(req.params.p_noproducts);
  let p_price = parseFloat(req.params.p_price);
  var add1query =
    "UPDATE inventorydetails set p_noproducts = (p_noproducts+1) , p_totalprice = (p_noproducts*p_price) WHERE p_name = ?";
  var query = db.query(add1query, [pname], function (err, rows, result) {
    if (err) {
      console.log(err);
    } else {
      var selectquery = "SELECT * FROM inventorydetails";
      var query = db.query(selectquery, function (err, rows, fields) {
        if (err) throw err;
        res.render("viewinvent", {
          items: rows,
        });
      });
    }
  });
});


router.get("/delete1/:p_name", (req, res, next) => {
  let pname = req.params.p_name;
  let p_noproducts = parseFloat(req.params.p_noproducts);
  let p_price = parseFloat(req.params.p_price);
  var add1query =
    "UPDATE inventorydetails set p_noproducts = (p_noproducts-1) , p_totalprice = (p_noproducts*p_price) WHERE p_name = ?";
  var query = db.query(add1query, [pname], function (err, rows, result) {
    if (err) {
      console.log(err);
    } else {
      var selectquery = "SELECT * FROM inventorydetails";
      var query = db.query(selectquery, function (err, rows, fields) {
        if (err) throw err;
        res.render("viewinvent", {
          items: rows,
        });
      });
    }
  });
});

router.get("/nopless10", (req, res, next) => {
  console.log(req.body);
    var selectquery = "SELECT * FROM inventorydetails WHERE p_noproducts < 10";
    var query = db.query(selectquery, function (err, rows, fields) {
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
});

router.get("/pmax", (req, res, next) => {
  console.log(req.body);
    var selectquery = "SELECT * FROM inventorydetails WHERE p_price=(SELECT MAX(p_price) FROM inventorydetails)";
    var query = db.query(selectquery, function (err, rows, fields) {
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
});
module.exports = router;
