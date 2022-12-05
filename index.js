// Collect necessary libraries
const express = require('express');
const path = require('path');

// Initialize express app
const app = express();
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Initialze REST API
app.get('/fp', (req, res) => res.status(200).sendFile(path.join(__dirname, './fp.html')));
app.get('/fp.js', (req, res) => res.status(200).sendFile(path.join(__dirname, './fp.js')));

//const client = redis.createClient();
const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`Listening on port ${port}...`)
});