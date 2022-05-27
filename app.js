var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.routes');
var todoListRouter = require('./routes/todolist.routes');

let mongoose = require('mongoose');



var app = express();

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/todolist', { useNewUrlParser: true, useNewUrlParser: true, useUnifiedTopology: true });
// //Bắt sự kiện error
// db.on('error', function(err) {
//     if (err) console.log(err)
// });
// //Bắt sự kiện open
// db.once('open', function() {
//     console.log("Kết nối thành công !");
// });


// const req = require('express/lib/request');
// const res = require('express/lib/response');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: "lap trinh nodejs" }));

app.use('/', indexRouter);

app.use('/todolist', todoListRouter);
app.use('/users', usersRouter);
//kiem tra middware user email
app.use((req, res, next) => {
    if (req.session.email) {
        res.locals.email = req.session.email;
        next();
    } else {
        res.redirect('/users/login');
    }
});
mongoose.connect('mongodb://localhost:27017/admin', { useNewUrlParser: true });
var db = mongoose.connection;

// Added check for DB connection
if (!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")
    // catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000, function() {
    console.log("server is running on port 3000");
});

module.exports = app;