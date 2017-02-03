const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(process.cwd(), 'src', 'node-app', 'public');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendfile(path.resolve(publicPath, 'index.html'));
});

app.listen(8080);
