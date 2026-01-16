const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000; // fallback if PORT isn't set

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('venom');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
