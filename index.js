var express = require('express');
var server = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var animalRouter = require('./routers/animal.router');

var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./secrets').mongoURI;




//powerup -- middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

//connect to the database
mongoose.connect(mongoURI);

//router
server.use(animalRouter);

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



server.listen(port, function(){
  console.log('Now listening on port...', port);
});
