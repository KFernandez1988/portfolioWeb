const express = require('express');
const app = require('express')();
const error = require('debug')('error:server');
const morganD = require('morgan-debug');
const cors = require('cors');
const routers = require('./routers');


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors);


app.get("/", (req, res) => {
    try {
        res.send("api")
    } catch (errors) {
        error(errors);
    }
});
//app.use("/api", routers);

app.use(morganD('db:request', 'dev'));



app.use((err, req, res, next) => {
    error('ERROR FOUND:', err);
    res.sendStatus(500);
});



module.exports = app;