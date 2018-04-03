const express = require('express');
const hbs = require('hbs');
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));


hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});


app.get('/', (req, res) => {
  res.render('index.hbs', {
    pageTitle: 'Index page'
  });
});

app.get('/harley', (req, res) => {
  res.render('harley.hbs');
});

app.get('/honda', (req, res) => {
  res.render('honda.hbs');
});

app.get('/suzuki', (req, res) => {
  res.render('suzuki.hbs');
});

app.get('/triumph', (req, res) => {
  res.render('triumph.hbs');
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
