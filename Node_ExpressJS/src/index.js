const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

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
app.set('views', path.join(__dirname, 'resources\\views'));

// Xử lí static file Set đường dẫn ảnh
app.use(express.static(path.join(__dirname, 'public')));

// Set lại đuôi file cho đỡ dài và chạy lại engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// route init
route(app);

app.post('/search', (req, res) => {
    //  console.log(req.query)
    res.render('search');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});