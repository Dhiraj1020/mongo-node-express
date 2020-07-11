const express = require('express');
const bodyparser = require('body-parser');
const bodyParser = require('body-parser');


const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next()
})
.get((req,res,next) => {
    res.end("will send all the promotion");
    })
    .post((req,res,next) => {
        res.end("will add promotion named as " + req.body.name + "with description " + req.body.description ); 
    })
    .put((req,res,next) => {
        res.end("put is not possible");
    })
    .delete((req,res,next) => {
        res.end("deleting all the promotion");
    });
    
    promoRouter.route('/:promoId')
    .all((req,res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        next();
    })
    .get((req,res,next) => {
    res.end("will send  promotion with id " + req.params.promoId + "named as " + req.body.name + "and description is "+ req.body.description);
    })
    .post((req,res,next) => {
        res.end("post is not possible with id " + req.params.promoId ); 
    })
    .put((req,res,next) => {
        res.end("updating promotion with id " + req.params.promoId);
    })
    .delete((req,res,next) => {
        res.end("deleting promotion with id " + req.params.promoId);
    });
    
    
    module.exports = promoRouter;