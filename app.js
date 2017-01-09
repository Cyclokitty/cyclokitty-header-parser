const express = require('express');
app = express();
const catMe = require('cat-me');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

const port = process.env.PORT || 3000;

app.get('/whoami', (req, res) => {
  let ip =
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

  let result = {
    'ip': ip,
    'language': req.headers['accept-language'].split(',', 1).join(''),
    'operatingSystem': req.headers['user-agent']
  }
  res.send(result);
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
  console.log(catMe());
})
