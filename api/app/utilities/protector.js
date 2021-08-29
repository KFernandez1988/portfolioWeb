const jwt = require('jsonwebtoken');
const debug = require('debug')("api:proc:");

exports.protector = (req, res, next) => {
    const { token } = req.header;

    try {
        const { id } = jwt.verify(token, process.env.SECRET);
        req.userId = id
        return next();
    } catch (error) {
        return res.status(401).json({ loggedIn: false });
    }
}