const routes = require("express").Router();
const messageHandler = require("./message_handler");

routes.post("/", messageHandler);

module.exports = routes;
