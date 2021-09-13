const Course = require('../models/Course');
const {mongoseToObject} = require('../../until/index');


class CourseController{

    //show các phần tử trong database lên màn hình 
    show(req, res, next){
        //courses tìm đến model để lấy database 
        Course.findOne({ slug: req.params.slug })
            .then(course => {
               res.render('courses/show', {
                course: mongoseToObject(course)
               });
            })
            //nếu có lõi thì bắt ở đây bằng catch
            .catch(next);
    };

    //get tạo một URL đến /courses/create
    create(req, res, next){
        res.render('courses/create');
    }
    // get tạo một url đến _id/edit
    edit(req, res, next){
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit',{
                course: mongoseToObject(course)
            }) )
            //nếu có lõi thì bắt ở đây bằng catch
            .catch(next);
    }
   
    store(req, res, next){
        // res.json(req.body);
        const formdata = req.body;
        const course = new Course(formdata);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            })

        // res.send('course save');
    }

    // put /course/:id
    update(req, res, next){
      Course.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next);
        
    }
    // get  /course/:id/delete
    destroy(req, res, next){
        Course.findById(req.params.id)
            .then(course => res.render('courses/delete',{
                course: mongoseToObject(course)
            }) )
            //nếu có lõi thì bắt ở đây bằng catch
            .catch(next);
    }
    // delete /course/:id 
    delete(req, res, next){
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }  
}

module.exports = new CourseController;