/* eslint-disable */
const express = require('express');
const bodyParser = require('body-parser');
const Complaint = require('../models/Complaint.js');
//const router = express.Router();
module.exports.controller = function (app)  {
 // get all complaints
 app.get('/complaints', (req, res) => {
  Complaint.find({}, 'name address phone_no date description', function (error, users) {
  if (error) { console.log(error); }
  res.send(users);
  })
})
//get a single complaints details
app.get('/complaints/:id', (req, res) => {
  Complaint.findById(req.params.id, 'name address phone_no date description', function (error, user) {
  if (error) { console.log(error); }
  res.send(user)
 })
})
 
     
 // add a new user
    app.post('/complaints', (req, res) => {
      const newComplaint = new Complaint({
      name: req.body.name,
      address: req.body.address,
      phone_no: req.body.phone_no,
      date: req.body.date,
      description: req.body.description
    });
        newComplaint.save((error, complaint) => {
        if (error) { console.log(error); }
        res.send(complaint);
        });
    });
    
// update a user
app.put('/complaints/:id', (req, res) => {
  Complaint.findById(req.params.id, 'name address phone_no date title description', function (error) {
  if (error) { console.error(error);}
    complaint.name= req.body.name
    complaint.address= req.body.address
    complaint.phone_no=req.body.phone_no
    complaint.date=req.body.date
    complaint.description= req.body.description})
     complaint.save(function (error,complaint) {
  if (error) { console.log(error); }
     res.send(complaint)
  })
})

// delete a user
app.delete('/complaints/:id', (req, res) => {
Complaint.remove({
  _id: req.params.id
  }, function(error){
 if (error) { console.error(error); }
    res.send({ success: true })
 })
})
};
  

