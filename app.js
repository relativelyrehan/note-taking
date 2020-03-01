const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var notes = [];

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get('/', function(req, res){
  var today = new Date();
  var options = { weekday: 'long', month: 'long', day: 'numeric' };
  var day = today.toLocaleDateString("en-US", options);
  res.render('home', {notes: notes, day: day});
});

app.post('/', function(req, res){
  var note = req.body.note;
  notes.push(note);
  console.log(notes);
  res.redirect("/");
})

app.listen(3000, function(){
  console.log('App is runnig');
});