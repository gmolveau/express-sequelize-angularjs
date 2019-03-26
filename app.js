const express = require('express');
const bodyparser = require('body-parser');
const env = require('dotenv').load();
const port = process.env.PORT || 8080;

const app = express();
app.use(bodyparser.json());
app.use(express.static("./angular"));

const article_router = require("./routes/article.router");
// app.use(PREFIX, ROUTER)
app.use("/articles", article_router);

app.listen(port, function() {
	console.log('app listening on port: ' + port);
});

module.exports = app;