const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

// Config env and port
dotenv.config();
const port = process.env.PORT || 8000;

// Music Router
const router = require('./routers');
app.use('/api', cors(), router);

// Page Error
app.get('*', (req, res) => {
  res.send('Wrong path! Pleas try again');
});

app.listen(port, () => {
  console.log(`Start server listen at http://localhost:${port}`);
});
