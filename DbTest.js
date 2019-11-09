//create a database

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT);
var MongoClient = require('mongodb').MongoClient;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const request = require('request');
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
/*
const Http = new XMLHttpRequest();
var url='https://www.quandl.com/api/v3/datasets/BSE/BOM533171.json?api_key=qz1RFMDVb5hEQ4qXxnUG';
Http.open("GET", url);
Http.send();
console.log(Http.responseText);
var obj = JSON.parse(Http.responseText);
*/
/*
let request = new XMLHttpRequest();
request.open('GET', 'https://www.quandl.com/api/v3/datasets/BSE/BOM533171.json?api_key=qz1RFMDVb5hEQ4qXxnUG', true);
request.onload = function () {
  // Convert JSON data to an object
  let users = JSON.parse(this.response);
request.send();
*/

request('https://www.quandl.com/api/v3/datasets/BSE/BOM533171.json',{json: true},(err, res, body) => {
if (err) {return console.log(err)};
console.log(body);
if (res.statusCode == 200){
//  console.log(body);
}; 
})

