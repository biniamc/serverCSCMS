const Customer = require('../models/Customer.js');
//const router = express.Router();
module.exports.controller = function (app)  {
 // get all users
 app.get('/customers', (req, res) => {
  Customer.find({}, 'fisrt_name last_name email phone_no address gender username password ', function (error, customers) {
  if (error) { console.log(error); }
  res.send(customers);
  })
})

//get a single user details
app.get('/customer/:id', (req, res) => {
  Customer.findById(req.params.id, 'fisrt_name last_name email phone_no address gender username password', function (error, customer) {
  if (error) { console.log(error); }
  res.send(customer)
 })
})
    
 // add a new user
    app.post('/customers', (req, res) => {
      const newCustomer = new Customer({
      fisrt_name: req.body.fisrt_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone_no: req.body.phone_no,
      address: req.body.address,
      gender: req.body.gender,
      username: req.body.username, 
      password: req.body.password 

    });
        newCustomer.save((error, customer) => {
        if (error) { console.log(error); }
        res.send(customer);
        });
    });

     // update a user
  app.put('/customer/:id', (req, res) => {
    Customer.findById(req.params.id, 'fisrt_name last_name email phone_no address gender username password', function (error, customer) {
    if (error) { console.error(error); }
      customer.fisrt_name=req.body.fisrt_name
      customer.last_name= req.body.last_name
      customer.email= req.body.email
      customer.phone_no= req.body.phone_no
      customer.address= req.body.address
      customer.gender=req.body.gender
      customer.username= req.body.username
      customer.password= req.body.password

       customer.save(function (error, customer) {
    if (error) { console.log(error); }
       res.send(customer)
    })
  })
})

// delete a user
app.delete('/customer/:id', (req, res) => {
  Customer.remove({
    _id: req.params.id
    }, function(error){
   if (error) { console.error(error); }
      res.send({ success: true })
   })
})

  };

