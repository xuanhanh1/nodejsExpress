const express = require('express');
const morgan = require('morgan');
var methodOverride = require('method-override')
const path = require('path');
const exphbs = require('express-handlebars');
const nodesass = require('node-sass');
const route = require('./routes/index');
const app = express();
const port = 3000;

const db = require('./config/bd/index');
db.connect();


app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

app.use(express.urlencoded({
  extended: true
}));
// sử dụng method-override để thay phương thức post thành puts
app.use(methodOverride('_method'))
app.use(express.json());
//templete mẫu 
app.engine('hbs', exphbs({
  extname: '.hbs',
  // helpers: {
  //   sum: (a, b) => a + b,
  // }
})



);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

//route đường dẫn tới trang web truyền vào đối tượng app
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});