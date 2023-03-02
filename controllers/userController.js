const path = require('path');
const rootDir = path.dirname(require.main.filename);
const User = require('../models/users')

exports.getApt = (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "index.html"));
}

exports.create = (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    User.create({
        name: name,
        email: email,
        phone: phone
    })
        .then()
        .catch(err => { console.log(err); })
};

exports.dispalyAll = (req, res, next) => {
    User.findAll()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.deleteUser = (req,res,next)=>{
        const id = req.query.id;
        User.destroy({
            where: {
               id: id//this will be your id that you want to delete
            }
         })
        .then(result=>{
          console.log('destroyed');
          res.redirect('/user');
        })
        .catch((err)=>console.log(err))
}
