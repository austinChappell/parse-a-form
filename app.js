const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const app = express();

let port = process.env.PORT || 3000;

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signup', (req, res) => {
  let data = req.body;
  res.render('signed-up', data);
});

app.listen(port, () => {
  console.log(`Your app is running on PORT ${ port }.`);
});
