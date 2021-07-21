/* eslint-disable */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const EmployeeSchema = new Schema({
 emp_id: String,
 full_name: String,
 username: String,
 email: String,
 password: String,
 phone_no: Number,
 department: String,
 gender: String
},{collection: "employee"});
const Employee = mongoose.model('Employee', EmployeeSchema)
module.exports = Employee;