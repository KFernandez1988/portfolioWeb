const router = require('express').Router();
const ctrl = require('../../controllers/projects');

router.get('/', ctrl.getAllProjects);
router.get('/:id', ctrl.getProjectDetails);

module.exports = router;