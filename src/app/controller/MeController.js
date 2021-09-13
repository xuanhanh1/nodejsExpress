const Course = require('../models/Course');
const {mutipleMongooseToObject} = require('../../until/index');


class MeController{
    // /me/storedCourses
    storedCourses(req, res, next) {
        Course.find()
            .then(courses => {
               res.render('me/stored-courses', {
                courses: mutipleMongooseToObject(courses)
               });
            })
            //nếu có lõi thì bắt ở đây bằng catch
            .catch(next);
        // res.render('me/stored-courses')
    };

}

module.exports = new MeController;