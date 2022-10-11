var express = require('express');
cookieParser = require("cookie-parser");
const pg = require('pg');
const path = require('path');

var app = express();
app.use(express.json({limit:'20mb'}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))


const mountRoutes = require('./routes')
mountRoutes(app)

app.use(express.static(path.join(__dirname,'client')))

app.get('/jsapi-geojson-edit', function (req, res) {
  res.sendFile(path.join(__dirname,'client', 'index.html'));
});

app.use((req, res, next) => {
  res.status(404).send("<h1> NOT FOUND! </h1>")
})

// Start the server.
app.listen(process.env.API_PORT);
console.log(`Listening on port ${process.env.API_PORT}...`);

