// create home pages controller



// get home(/) page
exports.getHomePages = (req, res) => {
    try {
        res.render('index', {
            sliders: res.locals.sliders,
            clients: res.locals.clients,
            categories: res.locals.categories,
        }, (err, html) => {
            if (err) {
                console.log(err);
            } else {
                res.send(html);
           }
        });
    } catch (error) {
        debug(error)
    }
}