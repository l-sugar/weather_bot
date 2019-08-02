const express = require("express");
const getForecast = require("./services/get_forecast");
const sendMessage = require("./services/send_message");

const app = express();

app.post("/", (req, res, next) => {
	console.log(req.body.message.text);
	res.end();
});
