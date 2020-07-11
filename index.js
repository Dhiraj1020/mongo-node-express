const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser')

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

//express static use to call static html files. and __dirname is function of morgan and it is used to call that html
//file from current folder and followed by path of that folder.
app.use(express.static(__dirname + '/public'));

const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promoRouter = require('./routes/promoRouter');

app.use('/dishes', dishRouter);
app.use('/leader' , leaderRouter);
app.use('/promotion', promoRouter);

app.use((req, res, next) => {
    // console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
  
  });
  
  const server = http.createServer(app);
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });