// var express = require('express');
// var router = express.Router();
// const userController = require('../controller/user');

// /* GET users listing. */

// router.get('/login/:name', function(req, res, next) {
//     res.send('userController.getLoginCreate');
// });
// router.post('/login/:name', function(req, res, next) {
//     res.send('userController.postLoginCreate');
// });
// router.get('/signup', function(req, res, next) {
//     res.send('userController.getUserCreate)');
// });
// router.post('/signup', function(req, res, next) {
//     res.send('userController.postUserCreate');
// });

// module.exports = router;



// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/login', function(req, res, next) {
//     res.send('Trang  loginn');
// });
// router.get('/signup', function(req, res, next) {
//     res.send('Trang  dang  ky');
// });
// router.get('/logout', function(req, res, next) {
//     res.send('Trang  logoutt');
// });
// module.exports = router;

var express = require('express');
var router = express.Router();

const usersController = require('../controller/users');


/* GET users listing. */
router.get('/login', usersController.getLoginCreate);
/* lay du lieu khi gui tu form */
router.post('/login', usersController.postLoginCreate);



/* day la cac router cua dang ky */
router.get('/signup', usersController.getUserCreate);
router.post('/signup', usersController.postUserCreate);

/* phan logout */
router.get('/logout', function(req, res, next) {
    req.session.destroy(function() {
        console.log("Thoat khoi he thong");
    });
    res.redirect('/users/login');
});

module.exports = router;