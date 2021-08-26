// information controller
const debug = require('debug')('client:info:');
const errors = require('debug')('client:info:err:');


// get about page
exports.getAboutPage = (req, res) => {
    try {
        res.render('information/about', {}, (err, html) => {
            if (err) errors(err);

            res.send(html);
        })
    } catch (error) {
        errors(error);
    }
};
// get contact page
exports.getContactPage = (req, res) => {
    try {
        res.render('information/contact', {}, (err, html) => {
            if (err) errors(err);

            res.send(html);
        })
    } catch (error) {
        errors(error);
    }
};
// post contact
// chat service
