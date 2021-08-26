const router = require('express').Router();
const ctrl = require('../../controllers/authentication');

router.get('/login', ctrl.getLogInPage);
router.get('/signup', ctrl.getSignUpPage);


module.exports = router;