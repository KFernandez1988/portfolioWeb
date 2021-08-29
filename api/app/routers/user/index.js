const router = require('express').Router();
const ctrl = require('../../controller/user');


router.post('/auth/login', ctrl.logIn);


module.exports = router;