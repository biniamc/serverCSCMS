/* eslint-disable */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const RatingSchema = new Schema({
 user_name: String,
 rating: Number
},{collection: "rating"});
const Rating = mongoose.model('Rating', RatingSchema)
module.exports = Rating;