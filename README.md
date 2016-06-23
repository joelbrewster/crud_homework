# crud_homework
Create a CRUD application with Express and Mongoose that allows for the Create, Reading, Updating and Deleting of a simple model of your own creation.




var express = require('express'),
 bodyParser = require('body-parser'),
 mongoose = require('mongoose'),
 app = express(),
 Movies = require('./models/movies');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/movie_library');

// create a new movie
var arr = [
 { title: 'caddy shack', director: 'Harold Ramis', year: 1980 },
 { title: 'Jaws', director: 'Steven Spielberg', year: 1975 },
 { title: 'The Hobbit', director: 'Peter Jackson', year: 2014 },
 { title: 'Star Wars', director: 'George Lucas', year: 1977 },
 { title: 'The Empire Strikes Back', director: 'George Lucas', year: 1980 }
];

Movies.insertMany(arr, function(error, docs) {});
