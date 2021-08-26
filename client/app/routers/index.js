const router = require('express').Router();
const debug = require('debug')('home:err');

const homeRouter = require('./home');
const authRouter = require('./authentication');
const infoRouter = require('./information');
const offerRouter = require('./offers');
const projectsRouter = require('./projects');

router.use('/', homeRouter);
router.use('/auth', authRouter);
router.use('/info', infoRouter);
router.use('/offers', offerRouter);
router.use('/projects', projectsRouter);


module.exports = router;