const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var notes = ["This is a anonymous message/thought sharing web app", "you can share your thoughts or read others'. Just small thoughts 200 words"];

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get('/', function(req, res){
  var today = new Date();
  var options = { weekday: 'long', month: 'long', day: 'numeric' };
  var day = today.toLocaleDateString("en-US", options);


  res.render('home', {notes: notes, day: day});
  // console.log(req.body);
});

app.post('/', function(req, res){
  var note = req.body.note;
  notes.push(note);
  console.log(notes);
  res.redirect("/");
})

app.listen(process.env.PORT || 3000, function(){
  console.log('App is runnig');
});
