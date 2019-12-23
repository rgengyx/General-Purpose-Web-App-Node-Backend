const express = require("express");
const path = require("path");
const app = express();
const controllers = require("./config/controllers");
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});

app.use(express.static(path.join(__dirname, "public")));
app.use(controllers);

const chat = require("./controllers/chat");

io.on("connection", function(socket) {
  console.log("Connected: connected");
  socket.on("disconnect", function(data) {
    console.log("Disconnected: connected");
  });

  // Send message
  socket.on("send message", function(data) {
    chat.storeChat(data);
    io.emit("new message", data);
  });
});
