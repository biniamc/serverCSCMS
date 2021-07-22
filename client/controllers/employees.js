/* eslint-disable */
const express = require('express');
const bodyParser = require('body-parser');
const Employee = require('../models/Employee.js');
//const router = express.Router();
module.exports.controller = function (app)  {
 // get all users
 app.get('/employees', (req, res) => {
  Employee.find({}, 'emp_id fname lname email phone_no gender branch department username password', function (error, employees) {
  if (error) { console.log(error); }
  res.send(employees);
  })
})
//get a single user details
app.get('/employee/:id', (req, res) => {
  Employee.findById(req.params.id, 'emp_id fname lname email phone_no gender branch department username password', function (error, employee) {
  if (error) { console.log(error); }
  res.send(employee)
 })
})
 
     
 // add a new user
  app.post('/employees', (req, res) => {
    const newEmployee = new Employee({
      emp_id: req.body.emp_id,
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      phone_no: req.body.phone_no,
      gender: req.body.gender,
      branch: req.body.branch,
      department: req.body.department,
      username: req.body.username,
      password: req.body.password, 
    });
        newEmployee.save((error, employee) => {
        if (error) { console.log(error); }
        res.send(employee);
        });
    });

       // update a user
  app.put('/employee/:id', (req, res) => {
    Employee.findById(req.params.id, 'emp_id fname lname email phone_no gender branch department username password', function (error, customer) {
    if (error) { console.error(error); }
      employee.emp_id= req.body.emp_id
      employee.fname= req.body.fname
      employee.lname= req.body.lname
      employee.email= req.body.email
      employee.phone_no= req.body.phone_no
      employee.gender= req.body.gender
      employee.branch= req.body.branch
      employee.department= req.body.department
      employee.username= req.body.username
      employee.password= req.body.password
       employee.save(function (error, employee) {
    if (error) { console.log(error); }
       res.send(employee)
    })
  })
})

// delete a user
app.delete('/employee/:id', (req, res) => {
  Employee.remove({
    _id: req.params.id
    }, function(error){
   if (error) { console.error(error); }
      res.send({ success: true })
   })
})

  };

