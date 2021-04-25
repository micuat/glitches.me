const https = require('https');
const fs = require('fs');
const path = require('path')

const options = {
  key: fs.readFileSync('/opt/certs/privkey.pem'),
  cert: fs.readFileSync('/opt/certs/cert.pem')
};

var subdomain = require('express-subdomain');
var express = require('express');
var app = express();

const staticFolder = './static';

// const subs = ["this", "what"];

fs.readdirSync(staticFolder).forEach(file => {
  // subs.push(file);
  const sp = path.join(__dirname, 'static', file);
  if(sp != 'main' && fs.lstatSync(sp).isDirectory()) {
    app.use(subdomain(file, express.static(sp)));
  }
});

app.use('/', express.static('static/main'));

const APIKEY = 'a0dbd1677c73be90486081c4b352dc9a7ed5569573a3706d3f3a575aa65fb6ba';
app.get('/hiding/:id', (req, res) => {
  https.get(`https://pad.glitches.me/api/1/getText?padID=${req.params.id}&apikey=${APIKEY}`, (resp) => {
//    res.send(resp)
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      // res.send(JSON.parse(data).data.text);
      res.send(data);
    });
  })
})

https.createServer(options, app).listen(3000);

