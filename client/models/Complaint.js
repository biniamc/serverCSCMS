const mongoose = require('mongoose');
//create complaint schema
const Schema = mongoose.Schema;
const ComplaintSchema = new Schema({
 name: String,
 address: String,
 phone_no: Number,
 date: Number,
 description: String
},{collection: "complaint"});
const Complaint = mongoose.model('Complaint', ComplaintSchema)
module.exports = Complaint;
