var app = require('express')();
var request = require('request');
const PORT = 9000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index')
})

app.listen(PORT, function() {
  console.log('listening on port ' + PORT)
})