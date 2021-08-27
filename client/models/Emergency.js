/* eslint-disable */
const mongoose = require('mongoose');

//create emrgency report schema

const Schema = mongoose.Schema;
const EmergencySchema = new Schema({
 first_name: String,
 last_name: String,
 email: String,
 phone_no: Number,
 location: String,
 department: String,
 select: String,
 description: String
},{collection: "emergency_report"});
const Emergency= mongoose.model('Emergency', EmergencySchema)
module.exports = Emergency;