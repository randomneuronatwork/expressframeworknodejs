const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route('/')
.all((req,res,next)=>{
	res.statusCode =200;
	res.setHeader('Content-type','text/plain');
	next();


})
.get((req,res,next)=>{
	res.end('will send all dishes to you !!!');


})
.post((req,res,next)=>{
	res.end('will add the dish:'+req.body.name+'with detail:'+req.body.description);


})
.put((req,res,next)=>{
	res.end('not supported ');
	res.statusCode =403;


})
.delete((req,res,next)=>{
	res.end('deleting all dishes !!');


});
module.exports =dishRouter;