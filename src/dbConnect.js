import dotenv from 'dotenv';
dotenv.config();
import  { MongoClient } from "mongodb";


const uri = process.env.MONGODB_URI;

const client =  new MongoClient(uri);

let collectionsDocuments;

try {
  await client.connect();

  const db = client.db("webSocketsDavi");
  collectionsDocuments = db.collection("documents");

  console.log('connected to Mongo')
}catch(error){
  console.log(error.message);
}

export { collectionsDocuments };