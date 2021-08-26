const app = require('./app/server');


const port = process.env.PORT || 3001;


app.listen(port, () => {
    console.log(`port is listening at ${port}`);
})