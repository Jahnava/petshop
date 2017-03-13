var express = require('express');
var animalRouter = express.Router();
var Animal = require('../models/animal.model');  // .. means to go up a level and search


//GET /animals
animalRouter.get('/animals', function(req, res){
  Animal.find({}, function(err, documents){
  if(err){
    res.status(500).json({
      msg: err  //in this case were using err. but in other cases use string something broke for privacy
    });
  } else {
    res.status(200).json({
      animals: documents
    });
  }
  });
});
//GET /animals
animalRouter.get('/animals/:id', function(req, res){
  Animal.find({_id: req.params.id}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        animals: documents
      });
    }
  });
});
//POST /animals //added info into postman and clicked send //appeared on git with id
animalRouter.post('/animals', function(req, res){
  var animal = new Animal(req.body);
// console.log(animal);
//   res.send('it works'); //used these to check git to make sure its logged
animal.save(function(err, document){
  if(err){
    res.status(500).json({
      msg:err
    });
  }else{
      res.status(200).json({
  msg: 'Success'
});
}
});
});
//PUT /animals/:id
animalRouter.put('/animals/:id', function(req, res){
  Animal.findOneAndUpdate({ _id: req.params.id}, req.body, function(err, document){
    if(err){
      res.status(500).json({ //500 is the number name to run something
        msg: err
      });
      }else{
          res.status(200).json({
      msg: 'Successfully updated '
      });
    }
  });
});

//DELETE /animals/:id
animalRouter.delete('/animals/:id',function(req, res){
  Animal.remove({_id: req.params.id}, function(err, document){ //use {_id: req.params.id, function(err, document) to get id
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully deleted'
      });
    }
  });
});

module.exports = animalRouter;
