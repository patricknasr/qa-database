const mongoose = require('mongoose');
const Lender = require('./blog');

const dbURI = "mongodb+srv://patrick_quickli:41xvaXZNXxb9ZTKp@qa-automation.yjasy2g.mongodb.net/qa-automation?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: false })
    .then((result) => console.log('connected'))
    .catch((err) => console.log(err))

/*
const lender = new Lender({
    name: 'anz',
    sla: '2 Days'
});*/

//lender.save()
/*
Lender.find()
    .then((result) => {
        console.log(result);
    })*/




    

/*const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
"mongodb+srv://patrick_quickli:41xvaXZNXxb9ZTKp@qa-automation.yjasy2g.mongodb.net/qa-automation?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);*/