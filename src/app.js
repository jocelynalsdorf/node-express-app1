'use strict';
var express = require('express');
var app = express();
var posts = require('./mock/posts.json');

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

app.get('/', function(req,res){
  res.render('index');
});

app.get('/blog/:title?', function(req,res){
  var title = req.params.title;
 
  if(title === undefined) {
    res.status(503);
    res.send("this page is under construction");
  } else {
     var post = posts[title];
     res.render('post', {post: post});
  }
  
});

app.listen(3000, function(){
  console.log("Frontend running on port 3000");
})