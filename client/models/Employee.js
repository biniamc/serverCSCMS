/* eslint-disable */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const EmployeeSchema = new Schema({
 emp_id: String,
 fname: String,
 lname: String,
 email: String,
 phone_no: Number,
 gender: String,
 branch: String,
 department: String,
 username: String,
 password: String
},{collection: "employee"});
const Employee = mongoose.model('Employee', EmployeeSchema)
module.exports = Employee;