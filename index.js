var express = require('express');
var server = express();
var mongoose = require('mongoose');

var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./secrets').mongoURI;

//connect to the database
mongoose.connect(mongoURI);
//Create the Mongoose Schema
var animalSchema = mongoose.Schema({
   color: String,
    size: String,
    type: String,
    price: Number
});
//Create the Mongoose Model
var Animal =mongoose.model('Animal', animalSchema);
//Testing database stuff
//this will create a new donkey in git each time i restart the server
// var donkey = new Animal({
//   color: 'gray',
//   sixe:'MED',
//   type:'donkey',
//   price: 180
// });
// donkey.save(function(err, data){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
//GET /animals
//GET /animals
//POST /animals
//PUT /animals/:id
//DELETE /animals/:id
server.listen(port, function(){
  console.log('Now listening on port...', port);
});
