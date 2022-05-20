var express = require('express');
var router = express.Router();
const Todolist = require('../models/todolist');

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = Todolist.todolistGetListID();
  console.log('------------> data -------- ');
  console.log(data);
  const result = data.map((id) => {
    return Todolist.todolistGetDetail(id)
  });
//truyen du lieu qua view
  res.render('index', {result: result, headline: 'xin chao cac ban', tagline: 'hom nay thu may', data:data});
});

module.exports = router;
