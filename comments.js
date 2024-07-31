// Create web server 

const express = require('express');
const app = express();
app.use(express.static('public'));
app.listen(3000, () => {
  console.log('App is listening on port 3000');
});

// Import comments.js
const comments = require('./comments.js');

// Use the comments module
console.log(comments.commentsArray);