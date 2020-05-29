var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Area of Routers
var searchRouter = require('./routes/search');
var itemDetailRouter = require('./routes/itemDetail');
var zipHintsRouter = require('./routes/zipHints');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/search', searchRouter);
app.use('/itemDetail', itemDetailRouter);
app.use('/zip', zipHintsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send('error page!');
    // res.render('error');
});

module.exports = app;
