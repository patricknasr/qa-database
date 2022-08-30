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



