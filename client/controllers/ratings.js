/* eslint-disable */
const Rating = require('../models/Rating.js');
//const router = express.Router();
module.exports.controller = function (app)  {
 // get all users
 app.get('/ratings', (req, res) => {
  Rating.find({}, 'user_name rating', function (error, users) {
  if (error) { console.log(error); }
  res.send(users);
  })
})
//get a single user details
app.get('/rating/:id', (req, res) => {
  Rating.findById(req.params.id, 'user_name rating', function (error, user) {
  if (error) { console.log(error); }
  res.send(user)
 })
})
 
     
 // add a new user
    app.post('/ratings', (req, res) => {
      const newRating = new Rating({
      user_name: req.body.user_name,
      rating: req.body.rating
    });
        newRating.save((error, user) => {
        if (error) { console.log(error); }
        res.send(user);
        });
    });

    // update a user
  app.put('/rating/:id', (req, res) => {
    User.findById(req.params.id, 'user_name rating', function (error, user) {
    if (error) { console.error(error); }
      user.user_name = req.body.user_name
      user.rating = req.body.rating
       user.save(function (error, user) {
    if (error) { console.log(error); }
       res.send(user)
    })
  })
})

// delete a user
app.delete('/rating/:id', (req, res) => {
  Rating.remove({
    _id: req.params.id
    }, function(error){
   if (error) { console.error(error); }
      res.send({ success: true })
   })
})

  };

