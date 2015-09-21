'use strict';
var express = require('express');
var app = express();
var posts = require('./mock/posts.json');


app.get('/', function(req,res){
  res.send("I love node");
});

app.get('/blog', function(req,res){
  res.send(posts);
});

app.listen(3000, function(){
  console.log("Frontend running on port 3000");
})