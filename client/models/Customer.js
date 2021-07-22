/* eslint-disable */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
 fisrt_name: String,
 last_name: String,
 email: String,
 phone_no: Number,
 address: Number,
 gender: String,
 username: String,
 password: String
},{collection: "customer"});
const Customer = mongoose.model('Customer', CustomerSchema)
module.exports = Customer;