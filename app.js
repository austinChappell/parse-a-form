const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const app = express();
const expressValidator = require('express-validator');

let port = process.env.PORT || 3000;

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

let data;

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/signup', (req, res) => {
  data = req.body;
  console.log(data);
  req.check('name', 'You must enter a name less than 100 characters long').notEmpty().len(1,100);
  req.check('email', 'You must enter a valid email address less than 100 characters long').notEmpty().isEmail().len(1,100);
  req.checkBody('birthYear', `Birth year must be between 1900 and ${ new Date().getFullYear() }`).optional({ checkFalsy: true }).isInt({ min: 1900, max: new Date().getFullYear() });
  req.check('position', 'You must enter a position').isIn(['tm', 'dev', 'ui', 'gd']);
  req.check('password', 'You must enter a password of at least 8 characters').notEmpty().len(8);
  req.getValidationResult()
  .then(function(result) {
    if(result.isEmpty()) {
      data.errors = [];
      res.render('signed-up', data);
    } else {
      data.errors = result.array();
      console.log(data.errors);
      console.log(data);
      res.render('index', data);
    }
  });
});

app.listen(port, () => {
  console.log(`Your app is running on PORT ${ port }.`);
});
