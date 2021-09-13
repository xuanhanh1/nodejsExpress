const Course = require('../models/Course');
const {mutipleMongooseToObject} = require('../../until/index');

class HomeController{

    index(req, res, next){
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
    };

    indexsearch(req, res){
        res.render('search')
    };
}

module.exports = new HomeController;