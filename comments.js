// Create a web server 
// 1. Create a new express server
// 2. Create a new route that listens for GET requests to the /comments path
// 3. When a GET request is made, the server should respond with an array of comments. 
// 4. Each comment should be an object with a message property. 
// 5. The array of comments should be saved in a variable called commentsData. 
// 6. The server should respond with commentsData when a GET request is made to the /comments path.
// 7. Start the server on port 4001

const express = require('express');
const app = express();

const commentsData = [
  { message: 'hello' },
  { message: 'hello' },
  { message: 'hello' },
];

app.get('/comments', (req, res) => {
  res.json(commentsData);
});

app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});

