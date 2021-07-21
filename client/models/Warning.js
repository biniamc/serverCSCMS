/* eslint-disable */
const mongoose = require('mongoose');

//create warning

const Schema = mongoose.Schema;
const WarningSchema = new Schema({
   emp_id: String,
   date: Number,
   description: String
},{collection: "warning"});
const Warning= mongoose.model('Warning', WarningSchema)
module.exports = Warning;