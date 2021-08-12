/* eslint-disable */
const express = require('express');
const bodyParser = require('body-parser');
const Notification = require('../models/Notification.js');
//const router = express.Router();
module.exports.controller = function (app)  {
 // get all users
 app.get('/notifications', (req, res) => {
  Notification.find({}, 'user_id title message', function (error, notification) {
  if (error) { console.log(error); }
  res.send(notification);
  })
})
//get a single user details
app.get('/notification/:id', (req, res) => {
  Notification.findById(req.params.id, 'user_id title message', function (error, notification) {
  if (error) { console.log(error); }
  res.send(notification)
 })
})
 
     
 // add a new user
  app.post('/notifications', (req, res) => {
     const newNotification = new Notification({
      user_id: req.body.user_id, 
      title:req.body.title,
      message:req.body.message
    });
        newNotification.save((error, notification) => {
        if (error) { console.log(error); }
        res.send(notification);
        });
    });

     // update a user
  app.put('/notification/:id', (req, res) => {
    Notification.findById(req.params.id, 'user_id title message', function (error, notification) {
    if (error) { console.error(error); }
      notification.user_id=req.body.user_id
      notification.title=req.body.title
      notification.message=req.body.message
       notification.save(function (error, notification) {
    if (error) { console.log(error); }
       res.send(notification)
    })
  })
})

// delete a user
app.delete('/notification/:id', (req, res) => {
  Notification.remove({
    _id: req.params.id
    }, function(error){
   if (error) { console.error(error); }
      res.send({ success: true })
   })
})

  };

