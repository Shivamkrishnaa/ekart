const express = require('express')
const srv = express();
srv.get('/', function(req,res){
    res.send('hello');
})
srv.listen(8080);