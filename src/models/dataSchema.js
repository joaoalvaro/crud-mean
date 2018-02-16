const mongoose = require('mongoose');

var carSchema = mongoose.Schema({
    brand: { type: String },
    model: { type: String },
    color: { type: String }
});

module.exports = mongoose.model('car', carSchema);