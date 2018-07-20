// Example project in express

const express = require('express');
const ecstatic = require('ecstatic');
const app = express()

app.use(ecstatic({
  root: `${__dirname}`,
  showdir: true,
}))

app.get('/hello', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
