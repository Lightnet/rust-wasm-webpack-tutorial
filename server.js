
const express = require('express')
const app = express()
var PORT = process.env.PORT || 3000;

//https://github.com/expressjs/express/issues/3589
//fixed bug error
express.static.mime.types['wasm'] = 'application/wasm';

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/dist/index.html');
   });

app.listen(PORT, function(){
    console.log(`server.js listening on port ${PORT}`)
  })