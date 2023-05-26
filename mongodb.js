const { response } = require("express");
const {MongoClient}= require("mongodb");
const url ='mongodb://127.0.0.1:27017';
const database='RECB';
const client =new MongoClient(url);

async function getData(){
        let result=await client.connect();
        let db=result.db(database);
        return db.collection('Students');
        

}

module.exports=getData;