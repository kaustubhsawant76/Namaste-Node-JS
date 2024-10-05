require("mongodb")
//Go to mongo db website
//create a free MB cluster
//Create a user 
//Get the connection string
//Install mongo db compass

const URI = "mongodb+srv://kaustubh19nov:KmjDCNqhacqmLRsu@nodejsdatakbs.ln5yn.mongodb.net/"

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://kaustubh19nov:KmjDCNqhacqmLRsu@nodejsdatakbs.ln5yn.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'HelloWorld';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  const data={
    firstname:"shubhankar",
    lastname:"rane",
    city:"mumbai",
    country:"usa"
  };
  // the following code examples can be pasted here...
//   const insertResult = await collection.insertMany([data]);
//   console.log('Inserted documents =>', insertResult);

//   const findResult = await collection.find({}).toArray();
//   console.log('Found documents =>', findResult);


//   const countResult = await collection.countDocuments({});
//   console.log("Count of documents in the User collection =>", countResult);

  const result = await collection.find({ firstname: "shubhankar" }).toArray();
  console.log("result => ", result);

  const resultCount = await collection.find({ firstname: "shubhankar" }).count();
  console.log("result => ", resultCount);

  return 'done.';
}


main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());