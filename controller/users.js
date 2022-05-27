const User = require('../models/users');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds);


/* xay dung cac ham de xu ly cho phan user */

exports.getLoginCreate = (req, res, next) => {
    res.render('./users/login', { meg_er: "" });
}

/* lay du lieu va save vao he thong */
exports.postLoginCreate = (req, res, next) => {
    console.log(" Day la phan lay du lieu tu login %j", req.body);
    User.findOne({ email: req.body.email }, function(err, response) {
        if (response) {
            /* xu ly so sanh mat khau co dung ko */
            const checkPassword = bcrypt.compareSync(req.body.password, response.password);
            if (checkPassword) {
                req.session.email = response.email;
                res.redirect('/');
            } else {
                res.render('users/login', { meg_er: " Mat khau khong dung" });
            }
        } else {
            console.log(' ko tim thay du lieu phu hop');
            res.render('users/login', { meg_er: "Tai khoan khong dung" });
        }
    });

}


/* phan dang ky */
exports.getUserCreate = (req, res, next) => {
    res.render('./users/signup');
}

exports.postUserCreate = (req, res, next) => {
    console.log(" Day la phan dang ky %j", req.body);
    var data = new User();
    data.email = req.body.email;
    data.password = bcrypt.hashSync(req.body.password, salt);
    data.save(function(err) {
        res.redirect('/');
    })
}