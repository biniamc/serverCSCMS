/* eslint-disable */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const EmployeeSchema = new Schema({
 emp_id: String,
 fname: String,
 lname: String,
 email2: String,
 phone_no2: Number,
 gender2: String,
 branch: String,
 department: String,
 username2: String,
 password2: String
},{collection: "employee"});
const Employee = mongoose.model('Employee', EmployeeSchema)
module.exports = Employee;