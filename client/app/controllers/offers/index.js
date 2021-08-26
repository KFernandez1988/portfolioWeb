// offers controller
const debug = require('debug')('client:auth:');
const errors = require('debug')('client:auth:err:');


//get offers
exports.getAllOffers = (req, res) => {
    try {
        res.render('offers/offers',
            {
                offers: [{
                    title: "digital marketing course",
                    paragraph: "Learn my top strategies to get clients",
                    linkDetails: "1",
                    price: 40,
                    open: true,
                },
                {
                    title: "download assests",
                    paragraph: "get 90% of all my figma assests",
                    linkDetails: "2",
                    price: 600,
                    open: true,
                    },
                        {
                    title: "Selling makuta bliss website",
                    paragraph: "I am selling my honey ecomence site",
                    linkDetails: "3",
                    price: 3500,
                    open: true,
                    },],
            }, (err, html) => {
            if (err) errors(err);

            res.send(html);
        })
    } catch (error) {
        errors(error);
    }
};
//get offers details
exports.getOfferDetails = (req, res) => {
    try {
        res.render('offers/offerDetails', {}, (err, html) => {
            if (err) errors(err);

            res.send(html);
        })
    } catch (error) {
        errors(error);
    }
};
//post offer
//put offer
//delete offer