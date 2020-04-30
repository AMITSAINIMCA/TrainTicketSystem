const express = require('express');
const path = require('path');
const app = express();

app.set('port', (process.env.PORT || 4253));
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(app.get('port'), function() {
    console.log('app running on port', app.get('port'));
});