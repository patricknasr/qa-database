const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lenderSchema = new Schema ({
    name: {
        type: 'string',
        required: true,
    },
    sla: {
        type: 'string',
        required: false,
    },
    policy: {
        type: 'string',
        required: false,
    },
    rates: {
        type: 'string',
        required: false,
    },
    calc: {
        type: 'string',
        required: false,
    },
    time: {
        type: 'string',
        required: true,
    }
});

const Lender = mongoose.model('Lender', lenderSchema);
module.exports = Lender;