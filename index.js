// Collect necessary libraries
const express = require('express');
const path = require('path');
const range_check = require('range_check');
const ipList = require('./src/iparray.json');

// Initialize express app
const app = express();
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Initialze REST API
app.get('/fp', (req, res) => res.status(200).sendFile(path.join(__dirname, '/src/fp.html')));
app.get('/fp2', (req, res) => res.status(200).sendFile(path.join(__dirname, '/src/fp2.html')));
app.get('/proxy', (req, res) => res.status(200).sendFile(path.join(__dirname, '/src/proxy.html')));
app.get('/bin/main.js', (req, res) => res.status(200).sendFile(path.join(__dirname, '/bin/main.js')))
app.get('/:version/:apikey/:loader', (req, res) => { 
    
    // https://fpnpmcdn.net/v3/9LPPFowgE7CqfuxXzBNq/loader_v3.8.1.js
    
    console.log(req.params);

    res.status(200).sendFile(path.join(__dirname, '/v3/9LPPFowgE7CqfuxXzBNq/loader_v3.8.1.js'))
});


app.post('/webhook', (req, res) => {
    // https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers
    // https://developers.google.com/static/search/apis/ipranges/googlebot.json

    let userAgent = req.body.browserDetails.userAgent;
    let userAgentToken = userAgent.split('; ')[1];
    //userAgentToken = 'Googlebot/2.1';
    
    let parsedUserAgentToken = userAgentToken.substring(0, userAgentToken.indexOf('/'));
    let whitelist = new Set([
        'APIs-Google',
        'AdsBot-Google-Mobile',
        'AdsBot-Google',
        'Mediapartners-Google',
        'Googlebot-Image',
        'Googlebot',
        'Googlebot-News',
        'Googlebot-Video',
        'AdsBot-Google-Mobile-Apps',
        'FeedFetcher-Google'
    ]);
    
    if (whitelist.has(parsedUserAgentToken)) {
        let ip = req.body.ip;
        //ip = '34.100.182.96';
    
        for (let i = 0; i < ipList.length; i++) {
            if (range_check.inRange(ip, ipList[i])) {
                console.log("Google Bot!");
                break;
            }
        }
    }

    //console.log(req.body);

    res.status(200);
    res.send(JSON.stringify({
        result: 200,
        description: 'Fingerprint Posted!'
    }));
})

//const client = redis.createClient();
const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`Listening on port ${port}...`)
});