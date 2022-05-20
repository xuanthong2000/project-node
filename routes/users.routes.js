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



var express = require('express');
var router = express.Router();
const userController = require('../controller/user');

/* GET users listing. */

router.get('/login/:name', userController.getLoginCreate);
router.post('/login/:name', userController.postLoginCreate);

router.get('/signup', userController.getUserCreate);
router.post('/signup', userController.postUserCreate);


module.exports = router;