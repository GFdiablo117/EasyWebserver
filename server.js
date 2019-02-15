const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('.'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(8080, ()=> {console.log('app is listening on http://localhost:8080')});