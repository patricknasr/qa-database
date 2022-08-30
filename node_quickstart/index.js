const mongoose = require('mongoose');
const Lender = require('./blog');
import date from 'date-and-time';

const dbURI = "mongodb+srv://patrick_quickli:41xvaXZNXxb9ZTKp@qa-automation.yjasy2g.mongodb.net/qa-automation?retryWrites=true&w=majority";

function main () {
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: false })
        .then((result) => console.log('connected'))
        .catch((err) => console.log(err))

    const lender = new Lender({
        name: 'anz',
        sla: '2 Days',
        time: `${date.format(now, 'YYYY-MM-DD--HH-mm-ss')}`
    });

    lender.save()
}

main();

/*
Lender.find()
    .then((result) => {
        console.log(result);
    })*/



