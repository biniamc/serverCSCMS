/* eslint-disable */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const NotificationSchema = new Schema({
 user_id: String,
 title: String,
 message: String
  
},{collection: "notification"});
const Notification = mongoose.model('Notification', NotificationSchema)
module.exports = Notification;