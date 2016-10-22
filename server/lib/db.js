"use strict";

const initialTweets = require("./tweets");
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://127.0.0.1:27017/tweeter";

console.log(`Connecting to MongoDB running at: ${MONGODB_URI}`);

module.exports = {

  connect: (onConnect) => {
    MongoClient.connect(MONGODB_URI, (err, db) => {

      if (err) {
        console.log('Could not connect! Unexpected error. Details below.');
        throw err;
      }
      const dbMethods = {

        saveTweet: (data) => {
          db.collection('tweets').insertOne(data);
          // could put in error handlers here
        }, 

        getTweets: (callback) => {
          db.collection('tweets').find().toArray(callback);
        }
      }

      onConnect(dbMethods);

    })
  }
}