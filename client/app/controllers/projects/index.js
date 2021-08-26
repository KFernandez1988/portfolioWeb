// Projects controller
const debug = require('debug')('client:auth:');
const errors = require('debug')('client:auth:err:');


//get Projects
exports.getAllProjects = (req, res) => {
    try {
        res.render('projects/projects', {
            projects: []
        }, (err, html) => {
            if (err) errors(err);

            res.send(html);
        })
    } catch (error) {
        errors(error);
    }
};
//get Projects details
exports.getProjectDetails = (req, res) => {
    try {
        res.render('projects/projectDetial', {}, (err, html) => {
            if (err) errors(err);

            res.send(html);
        })
    } catch (error) {
        errors(error);
    }
};
//post Project
//put Project
//delete Project