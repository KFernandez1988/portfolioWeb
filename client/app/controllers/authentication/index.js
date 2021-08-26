// authentica a client or potencial client
const debug = require('debug')('client:auth:');
const errors = require('debug')('client:auth:err:');


//get login page
exports.getLogInPage = (req, res) => {
    try {
        res.render('login/login', {}, (err, html) => {
            if (err) errors(err);
            res.send(html);
       })
    } catch (err) {
        //redirect to a error page explainning their situation
    }
};
//post (auth) a login
//get a signup page
exports.getSignUpPage = (req, res) => {
    try {
        res.render('signup/signup', {}, (err, html) => {
            if (err) errors(err);

            res.send(html);
        })
    } catch (err) {

    }
};
//post (create account) signup
//delete account
//get client profile
//edit a client profile
//send a password recovery
//reset password