var mongoose = require('mongoose');

//Defining the structure of our user collection
var beerSchema = new mongoose.Schema({
  name: String,
  maker: String,
  year: Number
});
// //define a pre save hook function
// beerSchema.pre('save', function(next){
//   var now = new Date();
//   this.updated_at = now;
//   if(!this.created_at){
//     this.created_at = now;
//   }
//   next();
// });

//registering our schema with mongoose / mongo
var Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;
