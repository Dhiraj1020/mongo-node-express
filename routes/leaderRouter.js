const express = require('express');
const bodyparser=require('body-parser');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
res.end("will send all the leaders");
})
.post((req,res,next) => {
    res.end("will add leader named as " + req.body.name + "with description " + req.body.description ); 
})
.put((req,res,next) => {
    res.end("put is not possible");
})
.delete((req,res,next) => {
    res.end("deleting all the leaders");
});

leaderRouter.route('/:leaderId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
res.end("will send  leaders with id " + req.params.leaderId + "named as " + req.body.name + "and description is "+ req.body.description);
})
.post((req,res,next) => {
    res.end("post is not possible with id " + req.params.leaderId ); 
})
.put((req,res,next) => {
    res.end("updating leader with id " +req.params.leaderId);
})
.delete((req,res,next) => {
    res.end("deleting leader with id " +req.params.leaderId);
});


module.exports = leaderRouter;