const res = require("express/lib/response");
const { response } = require("../app");
const User = ('../models/user');
const bcrypt = ('bcrypt-nodejs');
// di toi login
exports.getLoginCreate = (req, req, next) => {
    res.render('./users/login');
};
//xu ly viec login
exports.postLoginCreate = (req, req, next) => {
    console.log("No cahy roi day roi %j", req.body);
    User.findOne({ email: req.body.email }, function(err, res) {
        console.log("day la ket qua ma tui kiem tra duoc %j", response)
        const checkPassword = bcrypt.compareSync(req.body.password, response.password)
        if (response) {
            if (checkPassword) {
                // console.log('password ok me')
                res.redirect('/')
            } else {
                console.log('sai tai khoan roi')
                    //res.redirect('users/login', {message:'Tai khoan nhap khong dung})
            }
        } else {
            console.log('khong tim thay tai khoan')
        }
    })

}
exports.getUserCreate = (req, req, next) => {
    res.render('./users/signup')
}

// xu ly dang ky he thong
exports.postUserCreate = (req, req, next) => {
    console.log("du lieu gui len cho toi la: %j ", req.body)
    var data = new User();
    data.email = req.body.email;
    data.password = bcrypt.hashSync(req.body.password.salt);
    data.save(function(err) {
        res.redirect('/');
    })
}