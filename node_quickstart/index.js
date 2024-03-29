const mongoose = require('mongoose');
const Lender = require('./blog');
const date = require('date-and-time');

const dbURI = "mongodb+srv://patrick_quickli:41xvaXZNXxb9ZTKp@qa-automation.yjasy2g.mongodb.net/qa-automation?retryWrites=true&w=majority";

function main () {
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: false })
        .then((result) => console.log('connected'))
        .catch((err) => console.log(err))

    const now = new Date();
    const lender = new Lender({
        name: 'anz',
        category: 'sla',
        content: '6 Days',
        time: `${date.format(now, 'YYYY-MM-DD--HH:mm:ss')}`
    });

    lender.save()

    /*Lender.find({ name: 'anz', category: 'sla' })
        .then((result) => {
            console.log(result);
        })*/
    Lender.find({ name: 'cba', time: { $gte: '2022-08-30--00:00:00', $lte: '2022-09-30--00:00:00'} })
        .then((result) => {
            console.log(result);
    })
}

main();




