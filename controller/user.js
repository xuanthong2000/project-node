const res = require("express/lib/response");
const { response } = require("../app");
const User = ('../models/user');
const bcrypt = ('bcrypt-nodejs');
// di toi login
exports.getLoginCreate = (req, response, next) => {
    res.render('./users/login');
};
//xu ly viec login
exports.postLoginCreate = (req, response, next) => {
    console.log("No cahy roi day roi %j", req.body);
    User.findOne({ email: req.body.email }, function(err, res) {
        console.log("day la ket qua ma tui kiem tra duoc %j", res)

        if (res) {
            const isPassword = bcrypt.compareSync(req.body.password, res.password)
            if (isPassword) {
                // console.log('password ok me')
                req.session.email = response.email
                response.redirect('/')
            } else {
                // console.log('sai tai khoan roi')
                response.redirect('users/login', { message: 'Tai khoan nhap khong dung' });
            }
        } else {
            // console.log('khong tim thay tai khoan')
            response.redirect('users/login')
        }
    })

}
exports.getUserCreate = (req, response, next) => {
    res.render('./users/signup')
}

// xu ly dang ky he thong
exports.postUserCreate = (req, response, next) => {
    // console.log("du lieu gui len cho toi la: %j ", req.body)
    // var data = new User();
    // data.email = req.body.email;
    // data.password = bcrypt.hashSync(req.body.password.salt);
    // data.save(function(err) {
    //     res.redirect('/');
    // })

    //neu co session thi cho vao, ko co session ko cho vao
    if (req.session.email) {

    }
}