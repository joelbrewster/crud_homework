// Create a CRUD application with Express and Mongoose that allows for the Create, Reading, Updating and Deleting of a simple model of your own creation.

var express = require('express'),
bodyparser = require('body-parser'),
mongoose = require('mongoose'),
express = require('express'),
app = express(),
Beers = require('./models/beers');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/beer_library');

//Create new beers
var array = [
  { name: 'melbourne beer', maker: 'melbourne brewery', year: 2016 },
  { name: 'china beer', maker: 'china brewery', year: 2015 },
  { name: 'kingscliff beer', maker: 'kingscliff brewery', year: 2014 }
];

Beers.insertMany(array, function(error, docs) {} );

app.get('/', function(req, res){
  Beers.find({}, function(err, beers){
    res.json(beers);
  });
});

// app.get('/create', function(req, res){
//   var beer = new Beer(req.query);
//   beer.save(function(err, beer){
//     if(err) console.log(err);
//     res.json(beers);
//   });
// });

// app.get('/delete/:id',function(req, res){
//   res.send(req.params);
//   Beers.findoneAndRemove({'_id' : req.params.id}, function(err){
//     if(err) console.log(err);
//     res.send(err);
//   });
// });

app.listen(3000);
