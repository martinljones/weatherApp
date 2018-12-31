require('dotenv').load();
const express = require("express"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    app = express(),
    port = process.env.PORT || 3001,
    masterRoutes = require("./masterRoutes");

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../build/`));
masterRoutes(app);

app.listen(port, () => console.log(`Listening on ${port}`));

