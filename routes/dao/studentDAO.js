var mongo = require('mongodb');
var dbConn = require("../../Common/dbConnection")
async function regstdDAO(data) {
  try {
    var db = await dbConn();
    var collection = db.collection('student');
    var result = await collection.insertOne(data);
    return result;
  }
  catch (e) {
    console.log("Register DAO is not Connected", e.messge);
  }
}
async function getstdDAO() {
  console.log("get dao is called");
  try {
    var db = await dbConn();
    var collection = db.collection('student');
    var result = await collection.find().toArray();
    return result;
  } catch (e) {
    console.log('get', e.message)
  }
}
module.exports = { regstdDAO, getstdDAO }