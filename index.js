// Import packages
const express = require('express');
// App
const app = express();

app.use(express.json());
app.use(require('./routes/routes'));

// Starting server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening at port ${port}....`));

module.exports = {
  app,
};
