const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lenderSchema = new Schema ({
    name: {
        type: 'string',
        required: true,
    },
    category: {
        type: 'string',
        required: true,
    },
    content: {
        type: 'string',
        required: true,
    },
    time: {
        type: 'string',
        required: true,
    }
});

const Lender = mongoose.model('Lender', lenderSchema);
module.exports = Lender;