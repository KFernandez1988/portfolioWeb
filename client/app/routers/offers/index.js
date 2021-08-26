const router = require('express').Router();
const ctrl = require('../../controllers/offers');

router.get('/', ctrl.getAllOffers);
router.get('/:id', ctrl.getOfferDetails);

module.exports = router;