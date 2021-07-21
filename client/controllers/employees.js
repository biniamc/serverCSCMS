/* eslint-disable */
const express = require('express');
const bodyParser = require('body-parser');
const Employee = require('../models/Employee.js');
//const router = express.Router();
module.exports.controller = function (app)  {
 // get all users
 app.get('/employees', (req, res) => {
  Employee.find({}, 'emp_id fullname username email password phone_no department gender', function (error, employees) {
  if (error) { console.log(error); }
  res.send(employees);
  })
})
//get a single user details
app.get('/employee/:id', (req, res) => {
  Employee.findById(req.params.id, 'emp_id fullname username email password phone_no department gender', function (error, employee) {
  if (error) { console.log(error); }
  res.send(employee)
 })
})
 
     
 // add a new user
  app.post('/employees', (req, res) => {
    const newEmployee = new Employee({
      emp_id: req.body.emp_id,
      fullname: req.body.fullname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password, 
      phone_no: req.body.phone_no,
      department: req.body.department,
      gender: req.body.gender
    });
        newEmployee.save((error, employee) => {
        if (error) { console.log(error); }
        res.send(employee);
        });
    });

       // update a user
  app.put('/employee/:id', (req, res) => {
    Employee.findById(req.params.id, 'emp_id fullname username email password phone_no department gender', function (error, customer) {
    if (error) { console.error(error); }
    const newEmployee = new Employee({
      emp_id: req.body.emp_id,
      fullname: req.body.fullname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password, 
      phone_no: req.body.phone_no,
      department: req.body.department,
      gender: req.body.gender

    });
       newEmployee.save(function (error, employee) {
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

