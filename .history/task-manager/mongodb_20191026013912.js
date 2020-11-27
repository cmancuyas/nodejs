// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id.getTimestamp());
// console.log(id.id);
// console.log(id.id.length);
// console.log(id.toHexString().length);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }

    console.log('Successfully connected');

    const db = client.db(databaseName);

    // db.collection('users').insertOne(
    //   {
    //     name: 'Lebron',
    //     age: '27'
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Kimbee',
    //       age: '29'
    //     },
    //     {
    //       name: 'Luka',
    //       age: 22
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection('tasks').insertMany(
    //   [
    //     {
    //       name: 'Learn Angular 8',
    //       description: 'To create BP-Ticketing System',
    //       completed: true
    //     },
    //     {
    //       name: 'Learn Node JS',
    //       description: 'Server Side for BP-Ticketing System',
    //       completed: false
    //     },
    //     {
    //       name: 'Learn C#',
    //       description: 'For IT Inventory System',
    //       completed: false
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       console.log('Cannot insert tasks');
    //     }

    //     console.log(result.ops);
    //   }
    // );
  }
);
