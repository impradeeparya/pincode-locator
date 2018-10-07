var mongoose = require("mongoose");
var mongoSchema = mongoose.Schema;

var pincodeSchema = new mongoSchema({
    "code": Number,
    "location": String,
    "city": String,
    "state": String,
    "country": String
}, {collection: 'pincode'});

var pincode = mongoose.model('pincode', pincodeSchema);
module.exports = pincode