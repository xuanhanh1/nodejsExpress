const newController = require('./new');
const homeController = require('./home');
const courseController = require('./courses');
const meController = require('./me');

function route(app){

    app.use('/courses', courseController);
    app.use('/search', homeController);
    app.use('/news', newController);
    app.use('/me', meController);
    app.use('/', homeController);

    // app.get('/', (req, res) => {
    //     res.render('home')
    // });

    // app.get('/news', (req, res) => {
    //     res.render('news')
    // });
      
   
}

module.exports = route;