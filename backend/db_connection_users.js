const {MongoClient}=require('mongodb')
//or
//const MongoClient=require('mongodb').MongoClient
const url='mongodb://localhost:27017'
const client  =new MongoClient(url)
 
async function getConnect_users() {
    try {
        let connection = await client.connect();
        let connected_db = connection.db("web2");
        let connected_collection = connected_db.collection("users");
        return connected_collection;
    } catch (error) {
        console.error("Error connecting to users collection:", error);
        throw error;
    }
}
module.exports = getConnect_users;
