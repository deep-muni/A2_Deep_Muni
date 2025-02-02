const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(__dirname + '/reactapp/build/'));

app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname + '/reactapp/build/index.html'));
});

app.listen(process.env.PORT || 5000, function () {
    console.log('started');
});
