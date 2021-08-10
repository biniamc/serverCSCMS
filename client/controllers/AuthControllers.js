
const Customers = require('../models/Customer');
const Employees = require('../models/Employee');
const my_response = require('../Extra/Response');
const auth = require('../Extra/auth');

module.exports.controller = function (app) {

    app.post('/customer_login', (req, res) => {

        try{
    
            let result = {};
    
            Customers.findOne({
                //phone_no: req.body.user_name,
                //password: req.body.password,
            }, function(err, result_data) {
    
                try{
                    if (!err) {
                        console.log(result_data);
                        if(result_data){
    
                            let token = auth.getToken(15);
                            result.id = result_data._id;
                            result.phone_no = result_data.phone_no;
    
                            auth.saveCredential(token, result);
                            result.token = token;
                            res.json(my_response.prepare(result));
    
                        }else{
                            res.json(my_response.error("Access Denied"));
                        }
    
                    } else {
                        res.json(my_response.error(err.message));
                    }
                    res.end();
                }catch(err1){
                    res.json(my_response.error(err1.message));
                    res.end();
                }
    
            });
    
        }catch(err){
            res.json(my_response.error(err.message));
            res.end();
        }
    
    });
    
    app.post('/employee_login', (req, res) => {
    
        try{
    
            let result = {};
    
            Employees.findOne({
                email: req.body.email,
                password: req.body.password
            }, function(err, result_data) {
    
                try{
                    if (!err) {
                        if(result_data){
    
                            let token = auth.getToken(15);
                            result.id = result_data._id;
                            result.role = result_data.contrat_number;
    
                            auth.saveCredential(token, result);
                            result.token = token;
                            res.json(my_response.prepare(result));
    
                        }else{
                            res.json(my_response.error("Access Denied"));
                        }
    
                    } else {
                        res.json(my_response.error(err.message));
                    }
                    res.end();
                }catch(err1){
                    res.json(my_response.error(err1.message));
                    res.end();
                }
    
            });
    
        }catch(err){
            res.json(my_response.error(err.message));
            res.end();
        }
    
    });
    
    app.get('/logout/:token', (req, res) => {
    
        try{
            auth.deleteCredentials(req.params.token);
            res.json(my_response.prepare({}));
        }catch(err){
            res.json(my_response.error(err.message));
            res.end();
        }
    
    });

}

