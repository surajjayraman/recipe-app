const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// axios for edamam api request
const axios = require('axios');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// INSERT YOUR APP KEY
const key = '';
// INSERT YOUR APP ID
const id = '';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// add route for home page
app.get('/home', function(req, res) {
  res.render('home');
});

// add route for daily meal plan
app.get('/daily', function(req, res) {
  const context = {};
  res.render('daily', context);
});

// add route for daily-requirements search
app.get('/daily-req', function(req, res) {

  const context = {};
  const apipath = 'https://api.edamam.com/search';

  axios.get(apipath, {
    params: {
      q: 'dinner', // can pass a search param like chicken, salmon, lunch, breakfast or dinner
      app_id: id,
      app_key: key,
      diet: req.query.diet,
      health: req.query.health,
      //calories: req.query.min + '-' + req.query.max
    }
  })
    .then(function(response) {
      // no of recipes returned
      console.log(response.data.hits.length);

      if (response.data.hits.length == 0) {
        context.error = "Please try again (check your calories).";
        res.render('daily', context);
      } else {
        let idx = 0;
        let attempts = 0;
        while (response.data.hits[idx].recipe.yield < req.query.servings && attempts < 5) {
          idx++;
          attempts++;
        }
        
        context.uri = response.data.hits[idx].recipe.uri;
        context.label = response.data.hits[idx].recipe.label;
        context.image = response.data.hits[idx].recipe.image;
        context.source = response.data.hits[idx].recipe.source;
        context.url = response.data.hits[idx].recipe.url;
        context.yield = response.data.hits[idx].recipe.yield;
        context.calories = response.data.hits[idx].recipe.calories;
        context.ingredients = response.data.hits[idx].recipe.ingredients;
        context.totalNutrients = response.data.hits[idx].recipe.totalNutrients;
        context.dietLabels = response.data.hits[idx].recipe.dietLabels;
        context.healthLabels = response.data.hits[idx].recipe.healthLabels;
        context.params = req.query;
        res.render('daily-result', context);
      }
    })
    .catch(function(error) {
      context.error = "Please try again (check your calories).";
      console.log(error);
      res.render('daily', context);
    });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
