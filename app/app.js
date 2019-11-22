const express = require("express");
const path = require("path");
const app = express();

const server = require("http").createServer(app);
const io = require("socket.io")(server);

const feed = require("../app/controllers/feed");
const authentication = require("../app/controllers/authentication");

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});

app.use(express.static(path.join(__dirname, "public")));

app.use(feed);
app.use(authentication);

var connections = [];

io.on("connection", function(socket) {
  connections.push(socket);
  console.log("Connected: %s connected", connections.length);
  socket.on("disconnect", function(data) {
    connections.splice(connections.indexOf(socket), 1);
    console.log("Disconnected: %s connected", connections.length);
  });

  // Send message
  socket.on("send message", function(data) {
    io.sockets.emit("new message", { msg: data });
  });
});
