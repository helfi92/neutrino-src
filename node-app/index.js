const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(process.cwd(), 'src', 'node-app', 'public')));

app.get('/', (req, res) => {
  res.sendfile(path.resolve(__dirname, 'src', 'node-app', 'public', 'index.html'));
});

app.listen(8080);
