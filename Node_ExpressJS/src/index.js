import express from 'express';
import morgan from 'morgan';
import path from 'path'

import { engine } from 'express-handlebars';

const app = express()
const port = 3000

// HTTP logger
app.use(morgan('combined'))

// Set lại đường dẫn file views
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views',path.join(__dirname,'resources\\views'))

// Xử lí static file Set đường dẫn ảnh
app.use(express.static(path.join(__dirname,'public')))


// Set lại đuôi file cho đỡ dài và chạy lại engine
app.engine('.hbs', engine({extname: '.hbs'}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})