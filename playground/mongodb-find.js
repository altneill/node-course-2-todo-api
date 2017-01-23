const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to Mongodb server');
  }
    console.log('Connected to Mongodb server');

    //  db.collection('Todos').find().count().then((count) => {
    //  console.log(`Todos count: ${count}`);

  //  }, (err) => {
  //    console.log('Unable to fetch todos', err);

  db.collection('Users').find({name: 'Al'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));

    });
  //  db.close();
 });
