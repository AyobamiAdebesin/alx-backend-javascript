const express = require('express');
/**
 * Create a small HTTP server with Express
 */
const app = express();
const port = 1245;
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});

module.exports = app;
