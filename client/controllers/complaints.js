/* eslint-disable */
const express = require('express');
const bodyParser = require('body-parser');
const Complaint = require('../models/Complaint.js');
//const router = express.Router();
module.exports.controller = function (app) {
  // get all complaints
  app.get('/complaints', (req, res) => {
    Complaint.find({}, 'user_name address phone_no date description type subComplaint status', function (error, users) {
      if (error) { console.log(error); }
      res.send(users);
    })
  })
  //get a single complaints details
  app.get('/complaints/:id', (req, res) => {
    Complaint.findById(req.params.id, 'user_name address phone_no date description type subComplaint status', function (error, user) {
      if (error) { console.log(error); }
      res.send(user)
    })
  })


  // add a new user
  app.post('/complaints', (req, res) => {
    const newComplaint = new Complaint({
      user_name: req.body.user_name,
      address: req.body.address,
      phone_no: req.body.phone_no,
      date: req.body.date,
      description: req.body.description,
      type: req.body.type,
      subComplaint:req.body.subComplaint,
      status: req.body.status,
    });
    newComplaint.save((error, complaint) => {
      if (error) { console.log(error); }
      res.send(complaint);
    });
  });

  // update a user
  app.put('/complaints/:id', (req, res) => {

    Complaint.findById(req.params.id, function (error, complaint) {
      
      if (error) {
        console.error(error);
      }

      complaint.user_name = req.body.user_name
      complaint.address = req.body.address
      complaint.phone_no = req.body.phone_no
      complaint.date = req.body.date
      complaint.description = req.body.description
      complaint.type = req.body.type
      complaint.subComplaint=req.body.subComplaint
      complaint.status = req.body.status

      complaint.save(function (error, complaints) {
        if (error) { console.log(error); }
        res.send(complaints)
      })

    });

  })

  // delete a user
  app.delete('/complaints/:id', (req, res) => {
    Complaint.remove({
      _id: req.params.id
    }, function (error) {
      if (error) { console.error(error); }
      res.send({ success: true })
    })
  })
};


