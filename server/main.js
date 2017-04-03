var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = new express();

app.set('view engine', 'ejs');
//res.render(path.join(__dirname, '../app/index.ejs'),{});
//      res.sendFile(path.join(__dirname, '../app/index.html'));
//   res.sendFile('../app/index.html');

// which route to process 
//app.get('/', function(req,res) {
//  res.render(path.join(__dirname, '../app/index.ejs'),{});
//res.sendFile(path.join(__dirname, '../app/index.html'));
//} )

app.get('/', function(req,res) {
    res.render(path.join(__dirname, '../app/index'), function(err,html){
        if(err) {
            // in case of error log it to the console
            console.log(err);
        } else {
            res.send(html)
        }
    });
} )

// listen to the port above
app.listen(port, function(err){
    if(err) {
        // in case of error log it to the console
        console.log(err);
    } else {
        console.log("open local host on port " + port );
        console.log("local dir is:" + __dirname);
        open('http://localhost:'+ port);
    }
} )

