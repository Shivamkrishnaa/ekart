const express = require('express')
const srv = express();
const personroute = require('./routes/list');
srv.use(express.json());
srv.use(express.urlencoded({extended: true}));

srv.use('/api/todoslist',personroute);
// srv.use('/api/person',require('./routes/persons'));

srv.listen(8080);