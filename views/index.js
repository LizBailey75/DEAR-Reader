const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');

const port = 3001;

//set handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//set handlebar routes
app.get('/book/title', function (req, res) {
    var resourceParams = req.params;
    res.json(resourceParams);
});
// create a post endpoint
app.post('/book', function(req, res){
    // extract data from request
    //create a database entry
    res.json({'code':'bookcreated'});
});

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

