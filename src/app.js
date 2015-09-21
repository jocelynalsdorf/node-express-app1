'use strict';
var express = require('express');
var app = express();
var posts = require('./mock/posts.json');


app.get('/', function(req,res){
  res.send("I like node");
});

app.get('/blog/:title?', function(req,res){
  var title = req.params.title;
 
  if(title === undefined) {
    res.status(503);
    res.send("this page is under construction");
  } else {
     var post = posts[title];
     res.send(post);
  }
  
});

app.listen(3000, function(){
  console.log("Frontend running on port 3000");
})