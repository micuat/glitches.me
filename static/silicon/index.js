console.log("Beep beep! 🤖");

require("dotenv").config();

const http = require('http');
const express = require('express');
const app = express();

const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

var Datastore = require('nedb')
  , db = new Datastore({ filename: 'discord.db', autoload: true });

const replies = ["<3", "</3"]

client.on("message", async msg => {
  if (msg.channel.id == process.env.CHANNEL_ID) {
    // let tokens = msg.content.split(" ");
    // const index = Math.floor(Math.random() * replies.length);
    // msg.channel.send(`${msg.content} ${replies[index]}`);
    
    const data = {
      content: msg.content,
      artist: {
        id: msg.author.tag.substring(0, msg.author.tag.length - 5),
        avatar: msg.author.defaultAvatarURL
      },
      attachments: [],
      t: +msg.createdAt
    }

    msg.attachments.forEach(attachment => {
      data.attachments.push({
        url: attachment.url,
        width: attachment.width,
        height: attachment.height,
        name: attachment.name,
      });
    });

    db.insert(data, async function (err, newData) {
      const sockets = await io.fetchSockets();
      for (const socket of sockets) {
        socket.emit('new entry', newData);
      }
    });
  }
});

app.get('/list', (req, res) => {
  db.find({}).sort({ t: -1 }).limit(10).exec(function (err, data) {
    res.send(data);
  })
})

app.use('/', express.static('public'));
app.use('/src', express.static('src'));

const server = http.createServer(app);
const io = require('socket.io')(server);
io.on('connection', client => {
  client.on('hello', data => {
    client.emit('welcome', {content: "hi"});
  });
});

server.listen(3000);