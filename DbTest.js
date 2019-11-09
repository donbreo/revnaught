//create a database

var MongoClient = require('mongodb').MongoClient;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var url = "mongodb://localhost:27017/";
/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

console.info("Program Ended 1");

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });
*/
//Create and insert elemnet into DB
/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
*/

//AJAX template
var Http = new XMLHttpRequest();
url='https://www.quandl.com/api/v3/datasets/BSE/BOM533171.json?api_key=qz1RFMDVb5hEQ4qXxnUG';
Http.open("GET", url);
Http.send();
console.log(Http.responseText);
