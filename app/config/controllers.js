const express = require("express");
const app = express();

const feed = require("../controllers/feed");
const authentication = require("../controllers/authentication");
const user = require("../controllers/user");
const chat = require("../controllers/chat");

app.use(feed);
app.use(authentication);
app.use(user);
app.use(chat);

module.exports = app;
