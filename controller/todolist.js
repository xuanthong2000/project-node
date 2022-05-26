// import Model
const Todolist = require('../models/todolist');

// add 
exports.getTodolistCreate = (req, res, next) => {
        res.render('./todolist/add');
    }
    // tao moi todolist
exports.postTodolistCreate = (req, res, next) => {
    console.log('--------- v van duc----------');
    var data = new Todolist();
    console.log("body: %j", req.body)
    data.title = req.body.title ? req.body.title : data.title;
    data.content = req.body.content ? req.body.content : data.content;
    data.deadline_date = req.body.deadline_date ? req.body.deadline_date : data.deadline_date;
    // save the user and check for errors
    data.save(function(err) {
        res.redirect('/');
    });
}

// xem chi tiet
exports.getTodolistDetail = (req, res, next) => {
    const ID = req.params.id;
    Todolist.findById(ID, function(err, adventure) {
        res.render('./todolist/detail', { data: adventure });
    });
}

// get thông tin update
exports.getTodolistUpdate = (req, res, next) => {
        const ID = req.params.id;
        Todolist.findById(ID, function(err, adventure) {
            res.render('./todolist/edit', { data: adventure });
        });
    }
    // cap nhat
exports.postTodolistUpdate = (req, res, next) => {
    const data = {
        title: req.body.title,
        content: req.body.content,
        deadline_date: req.body.deadline_date
    }
    Todolist.update({ _id: req.params.id }, data, function(err, raw) {
        if (err) {
            res.send(err);
        }
        res.redirect('/');
    });
}

//xoa 
exports.getTodolistDelete = (req, res, next) => {
        const ID = req.params.id;
        Todolist.findById(ID, function(err, resData) {
            console.log(" du lieu query %j", resData);
            res.render('./todolist/delete', { data: resData });
        });
    }
    // xoa voi method post
exports.postTodolistDelete = (req, res, next) => {
        console.log("chay toi xoa %j", req.params.id);
        Todolist.deleteOne({ _id: req.params.id }, function(err) {
            if (err) console.log(err);
            res.redirect('/');
        });
    }
    //danh sach todolist
exports.listTodolist = (req, res, next) => {
    // console.log(req.session.email);
    // if(req.session.email){
    Todolist.get(function(err, data) {
        if (err) {
            console.log('Co loi xay ra');
        }
        console.log('------- phan boday--------- %j', data);
        res.render('index', { headline: 'xin chao cac ban', tagline: 'hom nay thu may', data: data });
    });
    // }else{
    //     res.redirect('users/login');
    // }
}