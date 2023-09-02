const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { engine } = require('express-handlebars');

// Connect to db
const db = require('./config/db');
db.connect();

const app = express();
const port = 3100;

// import route from './routes';
const route = require('./routes');

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
//app.use(morgan('combined'))
app.use(morgan('dev'));

// Set lại đường dẫn file views
app.set('views', path.join(__dirname, 'resources', 'views'));

// Xử lí static file Set đường dẫn ảnh
app.use(express.static(path.join(__dirname, 'public')));

// Set lại đuôi file cho đỡ dài và chạy lại engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// route init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
