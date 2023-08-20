
let client = require('../dbConnection');
let collection;

const db = client.db("Cluster0");
collection = db.collection("anime");


function insertAnime(cat, callback) {
    collection.insertOne(cat, callback);
}

function getAllAnime(callback) {
    collection.find({}).toArray(callback);
}

module.exports = { insertAnime, getAllAnime }