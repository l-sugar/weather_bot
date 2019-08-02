//imports
const express = require("express");
const cron = require("node-cron");
const axios = require("axios");

const config = require("./config");
const routes = require("./routes");

//config
const port = config.port;
const app = express();

//func
app.use("/", routes);

//listen
app.listen(port, () => {
	console.log(`Server now listening on port ${port}`);
});
