const express = require('express'), 
        path = require('path'),
        app = express(),
        port = process.env.PORT || 4200;

// Serve static files....
app.use(express.static(__dirname + '/dist/my-portfolio'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/my-portfolio/index.html'));
});

// default Heroku PORT
app.listen(port);