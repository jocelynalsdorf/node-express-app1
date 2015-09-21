'use strict';
var express = require('express');
var app = express();
var posts = require('./mock/posts.json');

//turns an object into an array
var postsLists = Object.keys(posts).map(function(value){
  return posts[value];
});

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');
app.use('/static', express.static(__dirname + '/public'));


app.get('/', function(req,res){
  var path = req.path;
  //creating a var due to the logic statement in _nav that hides the navbar everywhere but '/'
  res.locals.path = path
  res.render('index');
  //the above  res.locals.path = path is exact same as giving path object as the 2nd argument below
  //res.render('index', {path: path});
});

app.get('/posts', function(req,res){
  if(req.query.raw) {
    res.json(posts);
  }else {
  res.json(postsLists);
  }
});

app.get('/blog/:title?', function(req,res){
  var title = req.params.title;
 
  if(title === undefined) {
    res.status(503);
    res.render('blog', {posts: postsLists});
  } else {
     var post = posts[title] || {};
     res.render('post', {post: post});
  }
  
});

app.listen(3000, function(){
  console.log("Frontend running on port 3000");
})