var mongo = require('mongodb');

//create a database

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/bse";

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