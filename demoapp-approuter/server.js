const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Salut! Aplicatia minimala functioneaza perfect. 🟢');
});

app.post('/backup', (req, res) => {
  console.log("Job Scheduler a declansat actiunea!");
  res.status(200).send('Backup simulat cu succes!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});