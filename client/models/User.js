/* eslint-disable */
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
 username: String,
 password: String
},{collection: "users"});
const User = mongoose.model('User', UserSchema)
module.exports = User;

module.exports.createUser = (newUser, callback) => {
    bcryptjs.genSalt(10, (err, salt) => {
    bcryptjs.hash(newUser.password, salt, (error, hash) => {
    // store the hashed password
    const newUserResource = newUser;
    newUserResource.password = hash;
    newUserResource.save(callback);
    });
    });
   };
   