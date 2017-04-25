var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 8080;
var fs = require('fs');
const https = require('https');

var userKey = '94b5cfcbecccee165ca88464427c4743';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
//https://graph.facebook.com/endpoint?key=value&amp;access_token=cef4602f3bf1fce097920e23fba6d37b

//
//https://graph.facebook.com/elhefescottsdale/feed?access_token=1735906436671358|83db79a59a86764c94b1aa88eb72d737


//Facebook fan count
//https://graph.facebook.com/v2.8/elhefescottsdale/?fields=fan_count&access_token=1735906436671358|83db79a59a86764c94b1aa88eb72d737
/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

app.get("/", function (req, res, next) {
      res.redirect("/index.html");
});

app.get("/fblikes", function (req, res, next){
    res.send(fbAccessToken);
});
*/  
var numArray;

app.get("/numbers", function (req, res){
    var num = req.query.num;
    
    if(num = 1){
        numArray = [1,2,3,4,5];
    }
    if(num = 2){
        numArray = [3,2,5,4,1];
    }    
    
    res.send(numArray);
    
});



app.get("/social", function (req, res){
    res.send(userKey);
    res.end();
});







//Michael-warnick@live.com







//Cake Night Club
//https://api.social-searcher.com/v2/searches/58de0c92e4b00da8245f2d72/posts?period=recent&key=1ed62acebfc7d409d900dcea0ed847e4
app.get("/cake", function (req, response){

    https.get('https://api.social-searcher.com/v2/searches/58de0c92e4b00da8245f2d72/posts?period=recent&key=1ed62acebfc7d409d900dcea0ed847e4', (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
//2017-03-22,2017-03-23


        var data = '';
        res.on('data', function(d) {
            data += d;
        });

        res.on('end', function(d) {
            //console.log(data);
            response.send(data);
            // now you can do what you need to with it including passing it to the socket
        });

    })
    .on('error', (e) => {
        console.error(e);
    });
});


//Maya Club AZ
//https://api.social-searcher.com/v2/searches/58de0d2be4b00da8245f2de9/posts?period=recent&key=1ed62acebfc7d409d900dcea0ed847e4
app.get("/maya", function (req, response){

    https.get('https://api.social-searcher.com/v2/searches/58de0d2be4b00da8245f2de9/posts?period=recent&key=1ed62acebfc7d409d900dcea0ed847e4', (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
//2017-03-22,2017-03-23


        var data = '';
        res.on('data', function(d) {
            data += d;
        });

        res.on('end', function(d) {
            //console.log(data);
            response.send(data);
            // now you can do what you need to with it including passing it to the socket
        });

    })
    .on('error', (e) => {
        console.error(e);
    });
});

//El hefe
//https://api.social-searcher.com/v2/searches/58de0d7fe4b00da8245f2e50/posts?period=recent&key=1ed62acebfc7d409d900dcea0ed847e4
app.get("/elhefe", function (req, response){

    https.get('https://api.social-searcher.com/v2/searches/58de0d7fe4b00da8245f2e50/posts?period=recent&key=1ed62acebfc7d409d900dcea0ed847e4', (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
//2017-03-22,2017-03-23


        var data = '';
        res.on('data', function(d) {
            data += d;
        });

        res.on('end', function(d) {
            //console.log(data);
            response.send(data);
            // now you can do what you need to with it including passing it to the socket
        });

    })
    .on('error', (e) => {
        console.error(e);
    });
});

//The mint
//https://api.social-searcher.com/v2/searches/58de0df2e4b00da8245f2eb8/posts?period=recent&key=1ed62acebfc7d409d900dcea0ed847e4
app.get("/mint", function (req, response){

    https.get('https://api.social-searcher.com/v2/searches/58de0df2e4b00da8245f2eb8/posts?period=recent&key=1ed62acebfc7d409d900dcea0ed847e4', (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
//2017-03-22,2017-03-23


        var data = '';
        res.on('data', function(d) {
            data += d;
        });

        res.on('end', function(d) {
            //console.log(data);
            response.send(data);
            // now you can do what you need to with it including passing it to the socket
        });

    })
    .on('error', (e) => {
        console.error(e);
    });
});

//International
//https://api.social-searcher.com/v2/searches/58d41b79e4b034ac13f46e29/posts?period=recent&key=19a69e6dd566d348d80307444dd58b21
app.get("/international", function (req, response){

    https.get('https://api.social-searcher.com/v2/searches/58d41b79e4b034ac13f46e29/posts?period=recent&key=19a69e6dd566d348d80307444dd58b21', (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
//2017-03-22,2017-03-23


        var data = '';
        res.on('data', function(d) {
            data += d;
        });

        res.on('end', function(d) {
            //console.log(data);
            response.send(data);
            // now you can do what you need to with it including passing it to the socket
        });

    })
    .on('error', (e) => {
        console.error(e);
    });
});

//Livewire AZ
//https://api.social-searcher.com/v2/searches/58d41c82e4b034ac13f46ea7/posts?period=recent&key=19a69e6dd566d348d80307444dd58b21
app.get("/livewire", function (req, response){

    https.get('https://api.social-searcher.com/v2/searches/58d41c82e4b034ac13f46ea7/posts?period=recent&key=19a69e6dd566d348d80307444dd58b21', (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
//2017-03-22,2017-03-23


        var data = '';
        res.on('data', function(d) {
            data += d;
        });

        res.on('end', function(d) {
            //console.log(data);
            response.send(data);
            // now you can do what you need to with it including passing it to the socket
        });

    })
    .on('error', (e) => {
        console.error(e);
    });
});

//Wasted grain
//https://api.social-searcher.com/v2/searches/58d41d0fe4b034ac13f46f24/posts?period=recent&key=19a69e6dd566d348d80307444dd58b21
app.get("/wasted", function (req, response){

    https.get('https://api.social-searcher.com/v2/searches/58d41d0fe4b034ac13f46f24/posts?period=recent&key=19a69e6dd566d348d80307444dd58b21', (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
//2017-03-22,2017-03-23


        var data = '';
        res.on('data', function(d) {
            data += d;
        });

        res.on('end', function(d) {
            //console.log(data);
            response.send(data);
            // now you can do what you need to with it including passing it to the socket
        });

    })
    .on('error', (e) => {
        console.error(e);
    });
});

//Whiskey Row
//https://api.social-searcher.com/v2/searches/58d41daae4b034ac13f46f8d/posts?period=recent&key=19a69e6dd566d348d80307444dd58b21
app.get("/whiskey", function (req, response){

    https.get('https://api.social-searcher.com/v2/searches/58d41daae4b034ac13f46f8d/posts?period=recent&key=19a69e6dd566d348d80307444dd58b21', (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
//2017-03-22,2017-03-23


        var data = '';
        res.on('data', function(d) {
            data += d;
        });

        res.on('end', function(d) {
            //console.log(data);
            response.send(data);
            // now you can do what you need to with it including passing it to the socket
        });

    })
    .on('error', (e) => {
        console.error(e);
    });
});



//Bottle Blonde
//https://api.social-searcher.com/v2/searches/58d41f12e4b034ac13f46ffa/posts?period=recent&key=1ecb3305c4c3975252b3d115ca76d5a9
app.get("/blonde", function (req, response){

    https.get('https://api.social-searcher.com/v2/searches/58d41f12e4b034ac13f46ffa/posts?period=recent&key=1ecb3305c4c3975252b3d115ca76d5a9', (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
//2017-03-22,2017-03-23


        var data = '';
        res.on('data', function(d) {
            data += d;
        });

        res.on('end', function(d) {
            //console.log(data);
            response.send(data);
            // now you can do what you need to with it including passing it to the socket
        });

    })
    .on('error', (e) => {
        console.error(e);
    });
});

//dakota
//https://api.social-searcher.com/v2/searches/58d41fa1e4b034ac13f47076/posts?period=recent&key=1ecb3305c4c3975252b3d115ca76d5a9
app.get("/dakota", function (req, response){

    https.get('https://api.social-searcher.com/v2/searches/58d41fa1e4b034ac13f47076/posts?period=recent&key=1ecb3305c4c3975252b3d115ca76d5a9', (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
//2017-03-22,2017-03-23


        var data = '';
        res.on('data', function(d) {
            data += d;
        });

        res.on('end', function(d) {
            //console.log(data);
            response.send(data);
            // now you can do what you need to with it including passing it to the socket
        });

    })
    .on('error', (e) => {
        console.error(e);
    });
});

app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);
