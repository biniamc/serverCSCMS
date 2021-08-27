/* eslint-disable */
const express = require('express');
const bodyParser = require('body-parser');
const Emergency = require('../models/Emergency.js');
//const router = express.Router();
module.exports.controller = function (app)  {
 // get all users
 app.get('/emergencys', (req, res) => {
  Emergency.find({}, 'first_name last_name phone_no location department select description', function (error, emergency) {
  if (error) { console.log(error); }
  res.send(emergency);
  })
})

//get a single user details
app.get('/emergency/:id', (req, res) => {
  Emergency.findById(req.params.id, 'first_name last_name phone_no location department select description', function (error, emergency) {
  if (error) { console.log(error); }
  res.send(emergency)
 })
})
 
     
 // add a new user
    app.post('/emergencys', (req, res) => {
      const newEmergency = new Emergency({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone_no: req.body.phone_no,
      location: req.body.location,
      department: req.body.department,
      select: req.body.select,
      description: req.body.description
    });
        newEmergency.save((error, emergency) => {
        if (error) { console.log(error); }
        res.send(emergency);
        });
    });

     // update a user
  app.put('/emergency/:id', (req, res) => {
    Emergency.findById(req.params.id, 'first_name last_name phone_no location department select description', function (error, emergency) {
    if (error) { console.error(error); }
      emergency.first_name = req.body.first_name
      emergency.last_name = req.body.last_name
      emergency.phone_no = req.body.phone_no
      emergency.location = req.body.location
      emergency.select = req.body.select
      emrgency.description= req.body.description
       emrgency.save(function (error, user) {
    if (error) { console.log(error); }
       res.send(emergency)
    })
  })
})

// delete a user
app.delete('/emergency/:id', (req, res) => {
  User.remove({
    _id: req.params.id
    }, function(error){
   if (error) { console.error(error); }
      res.send({ success: true })
   })
})

  };

