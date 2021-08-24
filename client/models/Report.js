/* eslint-disable */
const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ReportSchema = new Schema({
 department: String,
 date: String,
 description: String
},{collection: "report"});
const Report = mongoose.model('Report', ReportSchema)
module.exports = Report;