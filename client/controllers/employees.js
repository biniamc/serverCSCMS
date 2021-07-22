/* eslint-disable */
const express = require('express');
const bodyParser = require('body-parser');
const Employee = require('../models/Employee.js');
//const router = express.Router();
module.exports.controller = function (app)  {
 // get all users
 app.get('/employees', (req, res) => {
  Employee.find({}, 'emp_id fname lname email phone_emp_id fname lname email2 phone_no2 gender2 branch department username2 password2no gender branch department username password', function (error, employees) {
  if (error) { console.log(error); }
  res.send(employees);
  })
})
//get a single user details
app.get('/employee/:id', (req, res) => {
  Employee.findById(req.params.id, 'emp_id fname lname email2 phone_no2 gender2 branch department username2 password2', function (error, employee) {
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
      email2: req.body.email2,
      phone_no2: req.body.phone_no2,
      gender2: req.body.gender2,
      branch: req.body.branch,
      department: req.body.department,
      username2: req.body.username2,
      password2: req.body.password2, 
    });
        newEmployee.save((error, employee) => {
        if (error) { console.log(error); }
        res.send(employee);
        });
    });

       // update a user
  app.put('/employee/:id', (req, res) => {
    Employee.findById(req.params.id, 'emp_id fname lname email2 phone_no2 gender2 branch department username2 password2', function (error, customer) {
    if (error) { console.error(error); }
      employee.emp_id= req.body.emp_id
      employee.fname= req.body.fname
      employee.lname= req.body.lname
      employee.email2= req.body.email2
      employee.phone_no2= req.body.phone_no2
      employee.gender2= req.body.gender2
      employee.branch= req.body.branch
      employee.department= req.body.department
      employee.username2= req.body.username2
      employee.password2= req.body.password2
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

