const express = require("express");
const mysql = require("mysql");
const router = express.Router();
var userModel = require("../controllers/auth");
var exphbs  = require('express-handlebars');
var Chart = require('chart.js');


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mspm-website",
  multipleStatements: true
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

router.get("/viewemployeedata", (req, res) => {
  res.render("viewemployeedata");
});


router.get("/loginchoice", (req, res) => {
  res.render("loginchoice");
});

router.get("/chooseperson", (req, res) => {
  res.render("chooseperson");
});

router.get("/chooseadmin", (req, res) => {
  res.render("chooseadmin");
});

router.get("/inventorychoice", (req, res) => {
  res.render("inventorychoice");
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

router.get("/makeaquotationpt3", (req, res) => {
  res.render("makeaquotationpt3");
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

router.get("/searchchoice", (req, res) => {
  res.render("searchchoice");
});

router.get("/addperson", (req, res) => {
  res.render("addperson");
});

router.get("/viewinvent2", (req, res) => {
  res.render("viewinvent2");
});

router.get("/viewinvent3", (req, res) => {
  res.render("viewinvent3");
});

router.get("/feedbackform", (req, res) => {
  res.render("feedbackform");
});

router.get("/feedbackrecorded", (req, res) => {
  res.render("feedbackrecorded");
});

router.get("/searchinvent", (req, res) => {
  res.render("searchinvent");
});

router.get("/adminlogin", (req, res) => {
  res.render("adminlogin");
});

router.get("/quotationadded", (req, res) => {
  res.render("quotationadded");
});

router.get("/adminlogin1", (req, res) => {
  res.render("adminlogin1");
});

router.get("/companydataform", (req, res) => {
  res.render("companydataform");
});

router.get("/companyadded", (req, res) => {
  res.render("companyadded");
});

router.get("/next1", (req, res) => {
  res.render("next1");
});


router.get("/next3", (req, res) => {
  res.render("next3");
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

router.get("/searchcompanyname", (req, res) => {
  res.render("searchcompanyname");
});

// router.get("/chart", (req, res) => {
//   res.render("chart");
// });

router.get("/chart", (req, res) => {
  selectquery = "SELECT p_name,p_qty FROM companyprodmultivalued ORDER BY p_name";
  var query = db.query(selectquery, function (err, rows, fields) {
    if (err) throw err;
    res.render("chart", {
      data: JSON.stringify(rows),
    });
  });
});

router.get("/authorityadded", (req, res) => {
  res.render("authorityadded");
});

router.get("/companyregistered", (req, res) => {
  res.render("companyregistered");
});

router.get("/searchprodname", (req, res) => {
  res.render("searchprodname");
});

router.get("/companyoverview", (req, res) => {
  res.render("companyoverview");
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

router.get("/searchproducts", (req, res) => {
  var selectquery = "SELECT companyabv,p_name,p_price,p_qty,(p_price*p_qty) as tp FROM companyprodmultivalued";
  var query = db.query(selectquery, function (err, rows, fields) {
    if (err) throw err;
    res.render("searchproducts", {
      items: rows,
    });
  });
});

router.get("/viewcompanyoverview", (req, res) => {
  var selectquery = "SELECT companyabv,sum(p_qty) as cp,count(p_name) as countname FROM companyprodmultivalued GROUP BY companyabv";
  var query = db.query(selectquery, function (err, rows, fields) {
    if (err) throw err;
    res.render("companyoverview", {
      items: rows,
    });
  });
});

router.get("/orderbyprodasc", (req, res, next) => {
  console.log(req.body);
  var selectquery = "SELECT companyabv,p_name,p_price,p_qty,(p_price*p_qty) as tp FROM companyprodmultivalued ORDER BY companyabv";
    var query = db.query(selectquery, function (err, rows, fields) {
      if (err) {
        console.log(err);
      }
      else{
        res.render("searchproducts", {
          items: rows,
        });
      }
      console.log(rows);
    });
});

router.get("/orderbyproddesc", (req, res, next) => {
  console.log(req.body);
  var selectquery = "SELECT companyabv,p_name,p_price,p_qty,(p_price*p_qty) as tp FROM companyprodmultivalued ORDER BY companyabv desc";
    var query = db.query(selectquery, function (err, rows, fields) {
      if (err) {
        console.log(err);
      }
      else{
        res.render("searchproducts", {
          items: rows,
        });
      }
      console.log(rows);
    });
});

router.get("/searchq", (req, res) => {
  var selectquery = "SELECT * FROM quotationdetails";
  var query = db.query(selectquery, function (err, rows, fields) {
    if (err) throw err;
    res.render("searchq", {
      items: rows,
    });
  });
});

router.get("/orderbyqasc", (req, res, next) => {
  console.log(req.body);
  var selectquery = "SELECT * FROM quotationdetails ORDER BY companyabv";
    var query = db.query(selectquery, function (err, rows, fields) {
      if (err) {
        console.log(err);
      }
      else{
        res.render("searchq", {
          items: rows,
        });
      }
      console.log(rows);
    });
});

router.get("/orderbyqdesc", (req, res, next) => {
  console.log(req.body);
  var selectquery = "SELECT * FROM quotationdetails ORDER BY companyabv desc";
    var query = db.query(selectquery, function (err, rows, fields) {
      if (err) {
        console.log(err);
      }
      else{
        res.render("searchq", {
          items: rows,
        });
      }
      console.log(rows);
    });
});



router.get("/quotationtable", (req, res) => { 
  var selectquery = "SELECT q.companyabv,q.quotationnumber,DATE(q.dateofq) as dateofq,q.validity,q.HSN,q.packingcharges,q.GST,q.freight,q.paymentterms,c.companyadd,m.p_name,m.p_price,m.p_qty FROM quotationdetails as q inner join companydetails as c using(companyabv) inner join companyprodmultivalued as m using(companyabv) WHERE q.companyaddress = 'empty' AND q.q_id=m.q_id";
  var query = db.query(selectquery,function (err, rows, fields) {
    if (err){ console.log(err)}
    else{
      res.render("quotationtable", {
        items: rows,
      });
//       var selectquery2 = "SELECT p_name,p_price,p_qty FROM companyprodmultivalued WHERE companyabv='APPLE-USA'";
//       var query = db.query(selectquery2, function (err, rows, fields) {
//       if (err){ console.log(err)}
//       else{
//       res.render("quotationtable", {
//         prods: rows,
//       });
//     }
// });
}
});
});

router.get("/testimonials", (req, res) => {
  res.render("testimonials");
});

router.get("/viewcomplaints", (req, res) => {
  var selectquery = "SELECT * FROM complaints";
  var query = db.query(selectquery, function (err, rows, fields) {
    if (err) throw err;
    res.render("viewcomplaints", {
      items: rows,
    });
  });
});

router.get("/trackvisitors", (req, res) => {
  var selectquery = "SELECT `u_companyname`,`u_companyemail` FROM `add_user` WHERE `u_companyname` NOT IN (SELECT DISTINCT(`u_companyname`) FROM add_user INTERSECT SELECT DISTINCT(`companyabv`) FROM companydetails)";
  var query = db.query(selectquery, function (err, rows, fields) {
    if (err) throw err;
    res.render("trackvisitors", {
      items: rows,
    });
  });
});

router.get("/viewauthority", (req, res) => {
  var selectquery = "SELECT * FROM add_authority";
  var query = db.query(selectquery, function (err, rows, fields) {
    if (err) throw err;
    res.render("viewauthority", {
      items: rows,
    });
  });
});


router.get("/makeaquotationpt1", (req, res) => {
  var selectquery = "SELECT companyabv from companydetails";
  var query = db.query(selectquery, function (err, rows, fields) {
    if (err) throw err;
    res.render("makeaquotationpt1", {
      items: rows,
    });
    console.log(rows);
  });
});


router.get("/makeaquotationpt2", (req, res) => {
  var selectquery = "SELECT p_name,p_price from inventorydetails";
  var query = db.query(selectquery, function (err, rows, fields) {
    if (err) throw err;
    res.render("makeaquotationpt2", {
      items: rows,
    });
    console.log(rows);
  });
});

router.get("/makeq2", (req, res) => {
  var selq = "SELECT q.companyabv,q.q_id,p.p_name,p.p_price FROM quotationdetails as q inner join inventorydetails as p  using(m_company) WHERE q.companyaddress='empty'";
  var query = db.query(selq,[2, 1], function (err, rows, fields) {
    if (err) throw err;
    else{
      res.render("makeq2", {
        items: rows,
      })
    }
    console.log(rows);
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

router.get("/addq/:p_name", (req, res, next) => {
  let pname = req.params.p_name;
  var add1query =
    "UPDATE companyprodmultivalued set p_qty = (p_qty+1) WHERE p_name = ?";
  var query = db.query(add1query,pname, function (err, rows, result) {
    if (err) {
      console.log(err);
    } else {
      var selectquery = "SELECT q.companyabv,q.p_name,q.p_price,q.p_qty,q.q_id FROM companyprodmultivalued as q INNER JOIN quotationdetails m using(q_id) WHERE m.companyaddress='empty'";
      var query = db.query(selectquery, function (err, rows, fields) {
        if (err) throw err;
        res.render("makeq3", {
          items: rows,
        });
      });
    }
  });
});


router.get("/deleteq/:p_name", (req, res, next) => {
  let pname = req.params.p_name;
  let p_noproducts = parseFloat(req.params.p_noproducts);
  let p_price = parseFloat(req.params.p_price);
  var add1query =
  "UPDATE companyprodmultivalued set p_qty = (p_qty-1) WHERE p_name = ?";
  var query = db.query(add1query, [pname], function (err, rows, result) {
    if (err) {
      console.log(err);
    } else {
      var selectquery = "SELECT q.companyabv,q.p_name,q.p_price,q.p_qty,q.q_id FROM companyprodmultivalued as q INNER JOIN quotationdetails m using(q_id) WHERE m.companyaddress='empty'";
      var query = db.query(selectquery, function (err, rows, fields) {
        if (err) throw err;
        res.render("makeq3", {
          items: rows,
        });
      });
    }
  });
});

router.get("/makeq3", (req, res) => {
  var selectquery = "SELECT q.companyabv,q.p_name,q.p_price,q.p_qty,q.q_id FROM companyprodmultivalued as q INNER JOIN quotationdetails m using(q_id) WHERE m.companyaddress='empty'";
  var query = db.query(selectquery, function (err, rows, fields) {
    if (err) throw err;
    res.render("makeq3", {
      items: rows,
    });
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

router.get("/nopb10and50", (req, res, next) => {
  console.log(req.body);
    var selectquery = "SELECT * FROM inventorydetails WHERE p_noproducts BETWEEN 10 AND 50";
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

router.get("/nopb50and100", (req, res, next) => {
  console.log(req.body);
    var selectquery = "SELECT * FROM inventorydetails WHERE p_noproducts BETWEEN 50 AND 100";
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

router.get("/nopb100and200", (req, res, next) => {
  console.log(req.body);
    var selectquery = "SELECT * FROM inventorydetails WHERE p_noproducts BETWEEN 100 AND 200";
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

router.get("/totalinventprod", (req, res, next) => {
  console.log(req.body);
    var selectquery = "SELECT count(*) as countp FROM inventorydetails";
    var query = db.query(selectquery, function (err, rows, fields) {
      if (err) {
        console.log(err);
      }
      else{
        res.render("viewinvent3", {
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

router.get("/pmin", (req, res, next) => {
  console.log(req.body);
    var selectquery = "SELECT * FROM inventorydetails WHERE p_price=(SELECT MIN(p_price) FROM inventorydetails)";
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

router.get("/deleteauth/:a_name", (req, res, next) => {
  let aname = req.params.a_name;
  var add1query =
    "DELETE FROM add_authority WHERE a_name = ?";
  var query = db.query(add1query, [aname], function (err, rows, result) {
    if (err) {
      console.log(err);
    } else {
      var selectquery = "SELECT * FROM add_authority";
      var query = db.query(selectquery, function (err, rows, fields) {
        if (err) throw err;
        res.render("viewauthority", {
          items: rows,
        });
      });
    }
  });
});

router.get("/deletecomplaint/:c_complaint", (req, res, next) => {
  let pname = req.params.c_complaint;
  var add1query =
    "DELETE FROM complaints WHERE c_complaint = ?";
  var query = db.query(add1query, [pname], function (err, rows, result) {
    if (err) {
      console.log(err);
    } else {
      var selectquery = "SELECT * FROM complaints";
      var query = db.query(selectquery, function (err, rows, fields) {
        if (err) throw err;
        res.render("viewcomplaints", {
          items: rows,
        });
      });
    }
  });
});
module.exports = router;

router.get("/orderbyinventasc", (req, res, next) => {
  console.log(req.body);
    var selectquery = "SELECT * FROM inventorydetails ORDER BY p_name";
    var query = db.query(selectquery, function (err, rows, fields) {
      if (err) {
        console.log(err);
      }
      else{
        res.render("viewinvent", {
          items: rows,
        });
      }
      console.log(rows);
    });
});

router.get("/orderbyinventdesc", (req, res, next) => {
  console.log(req.body);
    var selectquery = "SELECT * FROM inventorydetails ORDER BY p_name DESC";
    var query = db.query(selectquery, function (err, rows, fields) {
      if (err) {
        console.log(err);
      }
      else{
        res.render("viewinvent", {
          items: rows,
        });
      }
      console.log(rows);
    });
});

router.get("/orderbyauthasc", (req, res, next) => {
  console.log(req.body);
    var selectquery = "SELECT * FROM add_authority ORDER BY a_name";
    var query = db.query(selectquery, function (err, rows, fields) {
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
});

router.get("/orderbyauthdesc", (req, res, next) => {
  console.log(req.body);
    var selectquery = "SELECT * FROM add_authority ORDER BY a_name DESC";
    var query = db.query(selectquery, function (err, rows, fields) {
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
});


router.get("/orderbycompasc", (req, res, next) => {
  console.log(req.body);
    var selectquery = "SELECT * FROM complaints ORDER BY c_companyname";
    var query = db.query(selectquery, function (err, rows, fields) {
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
});

router.get("/orderbycompdesc", (req, res, next) => {
  console.log(req.body);
    var selectquery = "SELECT * FROM complaints ORDER BY c_companyname DESC";
    var query = db.query(selectquery, function (err, rows, fields) {
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
});

router.get("/makeaqhalf", (req, res) => {
  var selectquery = "SELECT companyabv FROM quotationdetails WHERE companyaddress = 'empty' ";
  var query = db.query("CALL getprod1(?)",'COMPANY1-MUMBAI', function (err, rows, fields) {
    if (err) {console.log(err);}
    else{
    res.render("makeaqhalf", {
      items: rows,
    });
    
console.log(rows);
var query = db.query("CALL getprod2(?)",'COMPANY1-MUMBAI', function (err, rows, fields) {
  if (err) {console.log(err);}
  else{
  res.render("makeaqhalf", {
    items: rows,
  });
  
console.log(rows);
}
});
  }
  });
});


router.get("/addprodq/:p_name/:p_price/:companyabv/:q_id", (req, res, next) => {
  console.log(req.body);
  let pname = req.params.p_name;
  let cn = req.params.companyabv;
  let p_price = (req.params.p_price);
  let q_id = (req.params.q_id);
  console.log(p_price);
  console.log(pname);
  db.query(
    "INSERT INTO companyprodmultivalued SET ? ",
    {
      companyabv: cn,
      p_name: pname,
      p_price: p_price,
      q_id: q_id,
    },
    function (err, rows, result) {
      if (err) {
        console.log(err);
      } else {
        var selectquery = "SELECT q.companyabv,q.q_id,p.p_name,p.p_price FROM quotationdetails as q inner join  inventorydetails as p using(m_company) WHERE q.companyaddress='empty'";
        var query = db.query(selectquery, function (err, rows, fields) {
          if (err) throw err;
          res.render("makeq2", {
            items: rows,
          });
        });
      }
    });
  });


  router.get("/viewqprod/:q_id", (req, res, next) => {
    let id = req.params.q_id;
    var selectquery = "SELECT companyabv,p_name,p_price,p_qty,(p_price*p_qty) as tp FROM companyprodmultivalued WHERE q_id=?";
  var query = db.query(selectquery, [id], function (err, rows, fields) {
    if (err) throw err;
    res.render("searchproducts", {
      items: rows,
    });
  });
  });