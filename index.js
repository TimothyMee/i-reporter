// Import packages
const express = require('express');
// App
const app = express();

app.use(express.json());
app.use(require('./routes/routes'));

// Starting server
app.listen(3000);

module.exports = {
  app,
};
