const router = require('express').Router();
const ctrl = require('../../controllers/information');

router.get('/about', ctrl.getAboutPage);
router.get('/contact', ctrl.getContactPage);

module.exports = router;