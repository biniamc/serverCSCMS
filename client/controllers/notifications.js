// const Customers = require('../models/Customer');
const Notification = require('../models/notification');
const response = require('../Extra/Response');
const auth = require('../Extra/auth');

module.exports.controller = function (app) {

    app.get('/notification/:token', (req, res) => {

        try {

            let user = auth.checkAuth(req.params.token);

            if (!user) {
                res.json(response.error("Access Denied!"));
            }

            if (!user.type || user.type != "employee") {
                res.json(response.error("Access Denied!"));
            }

            // if (user.department && user.department != "admin"){
            //     res.json(response.error("Access Denied!"));
            // }

            Notification.find({ for: user.department }, 'user_name address phone_no date description type subComplaint', function (error, users) {
                if (error) {
                    console.log(error);
                    res.json(response.error("error occurred!"));
                }
                res.json(response.prepare(users));
            });

        } catch (err) {
            res.json(response.error(err.message));
        }

    });

}
