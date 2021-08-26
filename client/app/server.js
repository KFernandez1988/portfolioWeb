const path = require('path');
const fs = require('fs');
const express = require('express');
const app = require('express')();
const error = require('debug')('error:server');
const morganD = require('morgan-debug');
const ejs = require('ejs');

const routers = require('./routers');
const sliders = require('./utils/sliders');
const clients = require('./utils/clients');
const categories = require('./utils/projects_category');

app.engine('html', ejs.renderFile)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



app.use(morganD('db:request', 'dev'));
app.use(function (req, res, next) {
    res.locals.sliders = sliders;
    res.locals.clients = clients;
    res.locals.categories = categories;
    next();
})
app.use('/', routers);



app.use((err, req, res, next) => {
    error('ERROR FOUND:', err);
    res.sendStatus(500);
})

module.exports = app;