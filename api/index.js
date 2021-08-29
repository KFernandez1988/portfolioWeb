const app = require('./app/server');
const debug = require('debug')('api:index::');

const port = process.env.PORT || "4040";


app.listen(port, () => {
    debug(`API server is running on ${port}`);
});