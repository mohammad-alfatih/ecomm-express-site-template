const express = require('express');
const path = require('path');

const cookieParser = require('cookie-parser');

const homeRouter = require('./routes/home');
const productsRouter = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/products', productsRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;

  console.log(res.locals.message);
  console.log(err.message);

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => console.log(`yadda yadda yadda ${PORT}`));