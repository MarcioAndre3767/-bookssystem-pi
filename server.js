const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/bookstore-front'));

app.get('/*', function(req, res){
    res.sendFile(__dirname + '/dist/bookstore-front/index.html');
});

app.listen(process.env.PORT || 4200);