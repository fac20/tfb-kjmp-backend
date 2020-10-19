const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// app.get("/", (req, res) => {
// 	// res.writeHead(200, { "content-type": "text/html" });
// 	res.set("content-type", "text/html");
// 	res.send("<h1>landing page</h1>");
// });

module.exports = app;
