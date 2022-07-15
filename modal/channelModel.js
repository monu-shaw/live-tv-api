const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    imgUrl: { 
        type: String,
    },
    low: {
        type: String,
    },
    mid: {
        type: String,
    },
    high: {
        type: String,
    },
    hd: {
        type: String,
    },
    language: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('channel', channelSchema)