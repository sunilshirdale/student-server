var mongo = require('mongodb');
async function getDBConnection() {
    var mongoClient = mongo.MongoClient;
    var server = await mongoClient.connect('mongodb+srv://Project1:Sangola%403767@sunil.lclf0lr.mongodb.net/');
    var db = server.db('school');
    return db;
}
module.exports = getDBConnection;